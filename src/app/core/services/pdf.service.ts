import { Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';
import { format } from 'date-fns';

import { landscapingProcess, Project, ProjectDetail } from '../models/project';
import { FinalProposal } from '../models/final-proposal';
import { PdfDocDefinition, PdfProjectDetailItem } from '../models/pdf';
import { SeparatorType } from '../models/base';
import { User } from '../models/auth';
import { Estimate } from '../models/estimate';
import { pastProjects, referenceProjects } from '../data/portfolio';
import { taxRate } from '../data/consts';
import { getBase64ImageFromURL } from '../utils/common.util';
import { enumToLabel } from '../utils/enum.util';
import { formatCurrency } from '../utils/string.util';
import { concatAccessoryTypeNames } from '../utils/project.util';

@Injectable({
  providedIn: 'root',
})
export class PdfService {

  marginBoth20 = [20, 20];
  marginVertical20 = [0, 20];

  marginLeftSpace10 = [10, 0, 0, 0];
  marginLeftNegSpace10 = [-10, 0, 0, 0];

  marginTop5 = [0, 5, 0, 0];

  marginRightSpace5 = [0, 0, 5, 0];
  marginRightSpace20 = [0, 0, 20, 0];

  marginBottom40 = [0, 0, 0, 40];
  marginBottom20 = [0, 0, 0, 20];
  marginBottom10 = [0, 0, 0, 10];
  marginBottom5 = [0, 0, 0, 5];

  marginPage = [50, 100, 50, 50];

  constructor(
    private datePipe: DatePipe,
  ) { }

  async getProjectPDFDocDefinition(project: Project | ProjectDetail): Promise<PdfDocDefinition> {
    const imageData = await getBase64ImageFromURL('./assets/images/logo.svg');
    const addressParts = project.address.split(', ');
    return {
      pageSize: 'LETTER',
      pageOrientation: 'portrait',
      pageMargins: this.marginPage,
      footer: (currentPage) => {
        return [{
          text: currentPage.toString(),
          alignment: 'right',
          margin: this.marginBoth20,
          style: ['font14']
        }, ];
      },
      header: () => {
        return [{image: imageData, alignment: 'left', margin: this.marginBoth20}, ];
      },
      content: [
        { text: format(new Date(), 'MMM d, yyyy'), alignment: 'right', margin: this.marginBottom20, style: ['font12'] },
        { text: `${project.user.firstName} ${project.user.lastName}`, margin: this.marginBottom5, style: ['font12'] },
        { text: addressParts[0], margin: this.marginBottom5, style: ['font12']},
        { text: addressParts.length >= 3 ? `${addressParts[1]}, ${addressParts[2]}` : '', margin: this.marginBottom5, style: ['font12']},
        { text: project.user.phone, margin: this.marginBottom5, style: ['font12'] },
        { text: `Subject: ${project.name}`, margin: this.marginVertical20, style: ['font12']}
      ],
      styles: {
        link: { color: '#07A39D', decoration: 'underline', decorationColor: '#07A39D' },
        font12: { fontSize: 12 },
        font14: { fontSize: 14 },
        font16: { fontSize: 16 },
        bold: { bold: true },
        header: { fontSize: 18, bold: true },
        backgroundTangerine: { background: '#F18F01' },
        colorPrimary: { color: '#07A39D' },
        estimateTable: { margin: [0, 5, 0, 15] },
        tableHeader: { fontSize: 15, bold: true, color: '#ffffff' }
      }
    };
  }

  async addProjectEstimateDefinition(estimate: Estimate) {
    const docDefinition: PdfDocDefinition = await this.getProjectPDFDocDefinition(estimate.project);
    // Site Visit Section
    docDefinition.content.push({ text: 'Site Visit Availability', margin: this.marginBottom20, style: [ 'header' ] });
    docDefinition.content.push({
      margin: this.marginBottom5,
      columns: [
        { text: 'Assigned to:', width: 'auto', margin: this.marginRightSpace5, style: [ 'font12' ] },
        { text: `${estimate.project.assignedContractor.firstName} ${estimate.project.assignedContractor.lastName}`, width: 'auto', style: [ 'font12' ] },
      ]
    });
    if (estimate.siteVisitSchedules && estimate.siteVisitSchedules.length > 0) {
      docDefinition.content.push({
        columns: [
          { text: 'Site Visit Schedule Time:', width: 'auto', margin: this.marginRightSpace5, style: [ 'font12' ] },
          { text: `${this.datePipe.transform(estimate.siteVisitSchedules[0].from)}`, width: 'auto', margin: this.marginRightSpace5, style: [ 'font12' ] },
          { text: `${this.datePipe.transform(estimate.siteVisitSchedules[0].from, 'h:mm a')} - ${this.datePipe.transform(estimate.siteVisitSchedules[0].to, 'h:mm a')}`, width: 'auto', style: [ 'font12' ] },
        ]
      });
    } else {
      docDefinition.content.push({
        columns: [
          { text: 'Site Visit Schedule Time:', width: 'auto', margin: this.marginRightSpace5, style: [ 'font12' ] },
          { text: 'Site visit schedule is not provided.', width: 'auto', style: [ 'font12' ] },
        ]
      });
    }

    // Project Details Section
    docDefinition.content.push({ text: 'Project Details', margin: this.marginVertical20, style: [ 'header' ] });
    let materialColumns = [];
    estimate.materials.forEach((material, index) => {
      if (index === estimate.materials.length - 1) {
        materialColumns.push({ text: enumToLabel(material), listType: 'none', style: [ 'font12', 'backgroundTangerine' ] });
      } else {
        materialColumns.push({ text: enumToLabel(material), listType: 'none', margin: this.marginBottom5, style: [ 'font12', 'backgroundTangerine' ] });
      }
    });
    const projectDetails: Array<PdfProjectDetailItem> = [ {
        label: 'Project Type: ',
        value: enumToLabel(estimate.projectType)
      }, {
        label: 'Type of materials: ',
        value: materialColumns
      }, {
        label: `What's currently there: `,
        value: estimate.groundState
      }, {
        label: 'Approx size: ',
        value: estimate.projectSize
      }, {
        label: 'Shape: ',
        value: enumToLabel(estimate.shapeType)
      }, {
        label: 'Landscaping Request - Details: ',
        value: estimate.requestDetails
      }, {
        label: 'Project description: ',
        value: estimate.coreProjectComment
      }, {
        label: `Project Estimate / $ per ${enumToLabel(estimate.costUnit)}: `,
        value: formatCurrency(estimate.pricePerUnit)
      }
    ];
    projectDetails.forEach(detail => {
      if (typeof(detail.value) === 'string') {
        docDefinition.content.push({
          margin: this.marginBottom5,
          text: [
            { text: detail.label, style: [ 'font12' ] },
            { text: detail.value, style: [ 'font12', (detail.value.indexOf('$') >= 0) ? 'colorPrimary' : '' ] },
          ],
        });
      } else {
        docDefinition.content.push({
          margin: this.marginBottom5,
          columns: [
            { text: detail.label, width: 'auto', style: [ 'font12' ] },
            { ul: materialColumns, margin: this.marginLeftNegSpace10 },
          ]
        });
      }
    });

    // Items Section
    estimate.items.forEach(item => {
      docDefinition.content.push({ text: enumToLabel(item.type), margin: this.marginVertical20, style: [ 'header' ] });
      materialColumns = [];
      item.materials.forEach((material, index) => {
        if (index === item.materials.length - 1) {
          materialColumns.push({ text: enumToLabel(material), listType: 'none', style: [ 'font12', 'backgroundTangerine' ] });
        } else {
          materialColumns.push({ text: enumToLabel(material), listType: 'none', margin: this.marginBottom5, style: [ 'font12', 'backgroundTangerine' ] });
        }
      });
      const estimateDetails: Array<PdfProjectDetailItem> = [ {
          label: 'Type of materials: ',
          value: materialColumns
        }, {
          label: 'Project location on property: ',
          value: enumToLabel(item.locationType)
        }, {
          label: 'Approx size: ',
          value: item.size
        }, {
          label: 'Project description: ',
          value: item.comment
        }, {
          label: `${enumToLabel(item.type)} / $ per ${enumToLabel(estimate.costUnit)}: `,
          value: formatCurrency(item.pricePerUnit)
        }
      ];
      estimateDetails.forEach(detail => {
        if (typeof(detail.value) === 'string') {
          docDefinition.content.push({
            margin: this.marginBottom5,
            text: [
              { text: detail.label, style: [ 'font12' ] },
              { text: detail.value, style: [ 'font12', (detail.value.indexOf('$') >= 0) ? 'colorPrimary' : '' ] },
            ],
          });
        } else {
          docDefinition.content.push({
            margin: this.marginBottom5,
            columns: [
              { text: detail.label, width: 'auto', style: [ 'font12' ] },
              { ul: materialColumns, margin: this.marginLeftNegSpace10 },
            ]
          });
        }
      });
    });

    // Current Project Lead Time Section
    docDefinition.content.push({ text: 'Current Project Lead Time', margin: this.marginVertical20, style: [ 'header' ], unbreakable: true });
    docDefinition.content.push({
      margin: this.marginBottom5,
      columns: [
        { text: 'Time frame for completion:', width: 'auto', margin: this.marginRightSpace5, style: [ 'font12' ] },
        { text: enumToLabel(estimate.timelineType), width: 'auto', style: [ 'font12' ] },
      ]
    });
    docDefinition.content.push({
      margin: this.marginBottom20,
      columns: [
        { text: 'Comments:', width: 'auto', margin: this.marginRightSpace5, style: [ 'font12' ] },
        { text: estimate.comment, width: 'auto', style: [ 'font12' ] },
      ]
    });

    // End Section
    const endColumnItems = [
      { listType: 'none', text: 'Thank you for your time and consideration and please don’t hesitate to reach out for additional information.', margin: this.marginVertical20, style: [ 'font12' ] },
      { listType: 'none', text: `${estimate.project.assignedContractor.firstName} ${estimate.project.assignedContractor.lastName}`, margin: this.marginVertical20, style: [ 'font12' ] },
      { listType: 'none', text: 'J & D Landscaping', margin: this.marginBottom5, style: [ 'font12', 'colorPrimary' ] },
      { listType: 'none', text: '860-324-6218', margin: this.marginBottom5, style: [ 'font12', 'colorPrimary' ] },
      { listType: 'none', text: 'jdlandscaping.net', link: 'https://jdlandscaping.net', margin: this.marginBottom5, style: [ 'font12', 'colorPrimary' ] },
      { listType: 'none', text: estimate.project.assignedContractor.email, link: `mailto:${estimate.project.assignedContractor.email}`, margin: this.marginBottom5, style: [ 'font12', 'colorPrimary' ] }
    ];
    docDefinition.content.push({
      margin: this.marginLeftNegSpace10,
      ul: endColumnItems,
      unbreakable: true
    });

    return docDefinition;
  }

  async addProjectProposalDefinition(proposal: FinalProposal) {
    const docDefinition: PdfDocDefinition = await this.getProjectPDFDocDefinition(proposal.project);
    // Description Section
    const layoutNames = concatAccessoryTypeNames(proposal.layouts.map(layout => layout.type), SeparatorType.Comma);
    docDefinition.content.push({
      text: [
        'We are excited to provide our proposal for the installation of ',
        { text: layoutNames, width: 'auto', style: [ 'font12', 'colorPrimary' ] },
        { text: ' for the ', width: 'auto', style: [ 'font12',  ] },
        { text: `${proposal.project.user.lastName} `, width: 'auto', style: [ 'font12', 'colorPrimary' ] },
        ' Residence. ',
        { text: 'J & D Landscaping', link: 'https://jdlandscaping.net', width: 'auto', margin: this.marginRightSpace5, style: [ 'font12', 'link' ] },
        ' has been a certified hardscaping contractor for over 15 years, specializing in paver walkways, patios, driveways, and retaining walls for both residential and commercial applications.',
      ],
    });
    docDefinition.content.push({ text: 'J & D Landscaping is a certified Techo-Pro installer, with over 2,500 completed hardscape projects throughout Connecticut and Massachusetts. We are an efficient, close-knit team of hardscape and paver installation professionals. We look forward to bringing your project to completion in a cost-effective and timely manner following all industry best practices.',
      margin: this.marginVertical20,
      style: [ 'font12' ]
    });

    // The J & D Landscaping Process Section
    docDefinition.content.push({ text: 'The J & D Landscaping Process', margin: this.marginVertical20, style: [ 'header' ] });
    docDefinition.content.push({ text: 'At J & D Landscaping, we believe in keeping our customers involved and informed during the design and construction process. From the time of the initial engagement, until the project is complete, we will provide full visibility into our work, our schedule and any issues or challenges that we encounter along the way along with appropriate resolution plans and recommendations. We utilize a five-phase process to design and implement a plan for construction. Even for projects that are lower in scope, we use this process to ensure that our customer receives a best-in-class product.', margin: this.marginBottom40, style: [ 'font12' ] });

    // Process Section
    const process = await Promise.all(landscapingProcess.map(async item => {
      const processItem = item;
      processItem.image = await getBase64ImageFromURL(item.image);
      return processItem;
    }));
    const processColumns = [];
    process.forEach((item, index) => {
      const column = {
        listType: 'none',
        margin: (index === process.length - 1) ? this.marginBottom40 : this.marginBottom20,
        columns: [
          { image: item.image, width: 50, height: 50 },
          { ul: [
              { listType: 'none', text: item.title, width: 'auto', margin: this.marginBottom5, style: [ 'font12' ] },
              { listType: 'none', text: item.description, width: 'auto', style: [ 'font12' ] },
              { listType: 'none',
                text: [
                  item. description,
                  { text: (index === 0) ? item.layoutTypeNames : '', width: 'auto', style: [ 'font12', 'colorPrimary'  ] },
                ],
                width: 'auto', style: [ 'font12' ]
              },
            ]
          },
        ],
        unbreakable: true
      };
      processColumns.push(column);
    });
    docDefinition.content.push({
      ul: processColumns
    });

    // Existing Site Assessment Section
    docDefinition.content.push({ text: 'Existing Site Assessment', margin: this.marginBottom20, style: [ 'header' ], unbreakable: true });
    docDefinition.content.push({ text: proposal.existingSiteAssessment, margin: this.marginBottom40, style: [ 'font12' ] });

    // Project Design Considerations Section
    docDefinition.content.push({ text: 'Project Design Considerations', margin: this.marginBottom20, style: [ 'header' ], unbreakable: true });
    docDefinition.content.push({ text: 'Based on our knowledge of the hardscape industry, we recommend keeping the following in mind:', margin: this.marginBottom40, style: [ 'font12' ] });

    // Size of Materials Section
    docDefinition.content.push({ text: 'Size of Materials', margin: this.marginBottom20, style: [ 'header' ], unbreakable: true });
    docDefinition.content.push({ text: proposal.paversSize, margin: this.marginBottom40, style: [ 'font12' ] });

    // Color of Materials Section
    docDefinition.content.push({ text: 'Color of Materials', margin: this.marginBottom20, style: [ 'header' ], unbreakable: true });
    docDefinition.content.push({ text: proposal.paversColor, margin: this.marginBottom40, style: [ 'font12' ] });

    // Quality of Materials Section
    docDefinition.content.push({ text: 'Quality of Materials', margin: this.marginBottom20, style: [ 'header' ], unbreakable: true });
    docDefinition.content.push({ text: proposal.paversQuality, margin: this.marginBottom40, style: [ 'font12' ] });

    // Layouts Section
    docDefinition.content.push({ text: 'Layouts', margin: this.marginBottom20, style: [ 'font16', 'colorPrimary' ], unbreakable: true });
    const layouts = await Promise.all(proposal.layouts.map(async item => {
      const attachments: string[] = await Promise.all(item.attachments.map(async (attachment) => {
        return await getBase64ImageFromURL(attachment.url);
      }));
      return {
        type: enumToLabel(item.type),
        comment: item.comment,
        attachments
      };
    }));
    layouts.forEach((layout, index) => {
      docDefinition.content.push({ text: layout.type, margin: this.marginBottom20, style: [ 'font14', 'bold' ] });
      docDefinition.content.push({ text: layout.comment, margin: (index === layouts.length - 1 && !layout.attachments.length) ? this.marginBottom40 : this.marginBottom20, style: [ 'font12' ] });
      if (layout.attachments.length) {
        const attachments = layout.attachments.map(attachment => {
          return { image: attachment, width: 40, height: 40, margin: this.marginRightSpace20 };
        });
        docDefinition.content.push({ columns: attachments, margin: (index === layouts.length - 1) ? this.marginBottom40 : this.marginBottom20});
      }
    });

    // Construction Procedure Section
    docDefinition.content.push({ text: 'Quality of Materials', margin: this.marginBottom20, style: [ 'header' ], unbreakable: true });
    docDefinition.content.push({ text: 'It is essential that during the construction of any new hardscaping project that the following procedures are completed to industry standards ensuring a quality long-lasting project.', margin: this.marginBottom40, style: [ 'font12' ] });

    // Removal of existing materials Section
    docDefinition.content.push({ text: 'Removal of existing materials', margin: this.marginBottom20, style: [ 'header' ], unbreakable: true });
    docDefinition.content.push({ text: proposal.existingMaterialRemoval, margin: this.marginBottom40, style: [ 'font12' ] });

    // Procedures Section
    proposal.procedures.forEach(procedure => {
      docDefinition.content.push({ text: enumToLabel(procedure.type), margin: this.marginBottom20, style: [ 'font16', 'colorPrimary' ], unbreakable: true });
      procedure.steps.forEach(step => {
        docDefinition.content.push({ text: step.title, margin: this.marginBottom20, style: [ 'font14', 'bold' ] });
        docDefinition.content.push({ text: step.comment, margin: this.marginBottom20, style: [ 'font12' ] });
      });
    });

    // Work Plan Section
    docDefinition.content.push({ text: 'Work Plan', margin: this.marginBottom20, style: [ 'header' ], unbreakable: true });
    docDefinition.content.push({ text: 'We will work with the customer to put together  a project plan that fits their schedule. We have developed an initial schedule that provides for project completion and clean up. This schedule is provided as a guideline. The dates are placeholders and will be adjusted based on the anticipated start and required end dates.', margin: this.marginBottom20, style: [ 'font12' ] });
    docDefinition.content.push({ text: proposal.workPlan, margin: this.marginBottom20, style: [ 'font12' ] });
    docDefinition.content.push({
      margin: this.marginBottom5,
      columns: [
        { text: 'Assigned to:', width: 'auto', margin: this.marginRightSpace5, style: [ 'font12' ] },
        { text: `${proposal.project.assignedContractor.firstName} ${proposal.project.assignedContractor.lastName}`, width: 'auto', style: [ 'font12', 'colorPrimary' ] },
      ]
    });
    docDefinition.content.push({
      margin: this.marginBottom5,
      columns: [
        { text: 'Approx start date:', width: 'auto', margin: this.marginRightSpace5, style: [ 'font12' ] },
        { text: format(new Date(proposal.startDate), 'MM/dd/yyyy'), width: 'auto', style: [ 'font12' ] },
      ]
    });
    docDefinition.content.push({
      margin: this.marginBottom20,
      columns: [
        { text: 'Assigned to:', width: 'auto', margin: this.marginRightSpace5, style: [ 'font12' ] },
        { text: format(new Date(proposal.endDate), 'MM/dd/yyyy'), width: 'auto', style: [ 'font12' ] },
      ]
    });

    // Cost Estimate Section
    docDefinition.content.push({ text: 'Cost Estimate', margin: this.marginBottom20, style: [ 'header' ], unbreakable: true });
    docDefinition.content.push({ text: 'We will work with the customer to put together  a project plan that fits their schedule. We have developed an initial schedule that provides for project completion and clean up. This schedule is provided as a guideline. The dates are placeholders and will be adjusted based on the anticipated start and required end dates.', margin: this.marginBottom20, style: [ 'font12' ] });
    docDefinition.content.push({ text: proposal.workPlan, margin: this.marginBottom20, style: [ 'font12' ] });
    const estimateTable = {
      style: 'estimateTable',
      layout: 'noBorders',
      margin: this.marginBottom20,
      table: {
        widths: ['60%', '40%'],
        body: []
      },
      unbreakable: true
    };
    estimateTable.table.body.push(
      [
        { text: 'Description', fillColor: '#02727C', margin: this.marginLeftSpace10, style: [ 'tableHeader' ] },
        { text: 'Cost', fillColor: '#02727C', margin: this.marginLeftSpace10, style: [ 'tableHeader' ] },
      ]
    );
    proposal.costEstimates.forEach(estimate => {
      const row = [
        {
          fillColor: '#f7f8fa',
          ul: [
            { listType: 'none', text: enumToLabel(estimate.type), margin: this.marginTop5, style: [ 'font12', 'colorPrimary'  ] },
            { listType: 'none', text: estimate.comment, margin: this.marginTop5, style: [ 'font12'  ] },
          ]
        },
        {
          fillColor: '#f7f8fa',
          ul: [
            { listType: 'none', text: 'Amount', margin: this.marginTop5, style: [ 'font12', 'colorPrimary'  ] },
            { listType: 'none', text: formatCurrency(estimate.cost), margin: this.marginTop5, style: [ 'font12'  ] },
          ]
        },
      ];
      estimateTable.table.body.push(row);
    });
    docDefinition.content.push(estimateTable);
    const subTotal = proposal.costEstimates.reduce((a, b) => {
      return a + ((b.accept || !proposal.id) ? Number(b.cost) : 0);
    }, 0);
    const tax = proposal.applyTax ? (subTotal - proposal.discount) * taxRate : 0;
    const total = subTotal + tax - proposal.discount;
    docDefinition.content.push({
      margin: this.marginBottom10,
      alignment: 'right',
      columns: [
        'Subtotal:',
        { text: formatCurrency(subTotal), width: 100, style: [ 'font12', 'colorPrimary' ] },
      ]
    });
    docDefinition.content.push({
      margin: this.marginBottom10,
      alignment: 'right',
      columns: [
        'Tax*:',
        { text: proposal.applyTax ? formatCurrency(tax) : 'not applied', width: 100, style: [ 'font12', 'colorPrimary' ] },
      ]
    });
    docDefinition.content.push({
      margin: this.marginBottom20,
      alignment: 'right',
      columns: [
        { text: 'Total:', style: [ 'font14' ] },
        { text: formatCurrency(total), width: 100, style: [ 'font14', 'colorPrimary' ] },
      ]
    });

    // Payment Schedule Section
    docDefinition.content.push({ text: 'Payment Schedule', margin: this.marginBottom20, style: [ 'header' ], unbreakable: true });
    docDefinition.content.push({ text: 'Compensation', margin: this.marginBottom5, style: [ 'font12' ] });
    docDefinition.content.push({
      margin: this.marginBottom5,
      text: [
        { text: 'Contract signing: ', style: [ 'font12' ] },
        { text: '10% of the contract amount', style: [ 'font12', 'colorPrimary' ] },
      ]
    });
    docDefinition.content.push({
      margin: this.marginBottom5,
      text: [
        { text: 'Materials arrive onsite and the project has started: ', style: [ 'font12' ] },
        { text: '40%', style: [ 'font12', 'colorPrimary' ] },
      ]
    });
    docDefinition.content.push({
      margin: this.marginBottom20,
      text: [
        { text: 'The project has been completed and signed off on: ', style: [ 'font12' ] },
        { text: '50%', style: [ 'font12', 'colorPrimary' ] },
      ]
    });
    docDefinition.content.push({ text: 'Invoices', margin: this.marginBottom5, style: [ 'font12', 'bold' ] });
    docDefinition.content.push({ text: 'Unless otherwise agreed with the client, our invoices are due upon completion of the project.', margin: this.marginBottom20, style: [ 'font12' ] });
    docDefinition.content.push({ text: 'Payment', margin: this.marginBottom5, style: [ 'font12', 'bold' ] });
    docDefinition.content.push({ text: 'Payment can be made by ACH, wire, credit card or check. For payment by ACH or wire, we will provide appropriate bank routing and account information in advance of the first payment. Payments made by check must be received by J & D Landscaping by the invoice date.', margin: this.marginBottom20, style: [ 'font12' ] });

    // J&D Landscape Past Projects Section
    docDefinition.content.push({ text: 'J&D Landscape Past Projects', margin: this.marginBottom20, style: [ 'header' ], unbreakable: true });
    docDefinition.content.push({
      margin: this.marginBottom20,
      text: [
        'J & D Landscaping has installed hardscaping for residential, commercial and municipal customers throughout Connecticut and Massachusetts. We provide a flexible range of services that include the installation of walkways, patios, parking areas, pool patios, retaining walls and other hardscape related projects. Below are just a few examples of some projects that are similar to the size and scope of your project.  To view more projects please visit our Instagram page that is consistently updated with new projects as they have been completed.  More project photos are available on Instagram at ',
        { text: '@JDLandscapingLLC', link: 'https://www.instagram.com/jdlandscapingllc', width: 'auto', margin: this.marginRightSpace5, style: [ 'font12', 'link' ] },
      ],
    });
    const pdfPastProjects = await Promise.all(pastProjects.map(async item => {
      const pastProject = item;
      pastProject.image = await getBase64ImageFromURL(item.image);
      return pastProject;
    }));
    const pastProjectsItems = [];
    pdfPastProjects.forEach((item, index) => {
      const column = {
        listType: 'none',
        margin: (index === pdfPastProjects.length - 1) ? this.marginBottom40 : this.marginBottom20,
        columns: [
          {
            margin: this.marginRightSpace20,
            width: 330,
            ul: [
              { listType: 'none', text: item.name, width: 'auto', margin: this.marginBottom20, style: [ 'font12', 'colorPrimary' ] },
              { listType: 'none', text: item.comment, width: 'auto', style: [ 'font12' ] },
            ]
          },
          { image: item.image, width: 200, height: 145, alignment: 'right' },

        ],
        unbreakable: true
      };
      pastProjectsItems.push(column);
    });
    docDefinition.content.push({
      margin: [-25, 0, 0, 0],
      ul: pastProjectsItems,
    });

    // References Section
    docDefinition.content.push({ text: 'References', margin: this.marginBottom20, style: [ 'header' ], unbreakable: true });
    docDefinition.content.push({ text: 'J & D Landscaping can provide a list of additional references if requested, additional project photos to the references listed below and any other additional information the customer requests.', margin: this.marginBottom20, style: [ 'font12' ] });
    const pdfReferenceProjects = await Promise.all(referenceProjects.map(async item => {
      const referenceProject = item;
      referenceProject.image = await getBase64ImageFromURL(item.image);
      return referenceProject;
    }));
    const pastReferenceItems = [];
    pdfReferenceProjects.forEach((item, index) => {
      const column = {
        listType: 'none',
        margin: (index === pdfReferenceProjects.length - 1) ? this.marginBottom40 : this.marginBottom20,
        columns: [
          {
            margin: this.marginRightSpace20,
            width: 330,
            ul: [
              { listType: 'none', text: item.name, width: 'auto', margin: this.marginBottom20, style: [ 'font12', 'colorPrimary' ] },
              { listType: 'none', text: item.comment, width: 'auto', style: [ 'font12' ] },
            ]
          },
          { image: item.image, width: 200, height: 145, alignment: 'right' },
        ],
        unbreakable: true
      };
      pastReferenceItems.push(column);
    });
    docDefinition.content.push({
      margin: [-25, 0, 0, 0],
      ul: pastReferenceItems
    });

    // End Section
    const endColumnItems = [
      { listType: 'none', text: 'Thank you for your time and consideration and please don’t hesitate to reach out for additional information.', margin: this.marginVertical20, style: [ 'font12' ] },
      { listType: 'none', text: `${proposal.project.assignedContractor.firstName} ${proposal.project.assignedContractor.lastName}`, margin: this.marginVertical20, style: [ 'font12' ] },
      { listType: 'none', text: 'J & D Landscaping', margin: this.marginBottom5, style: [ 'font12', 'colorPrimary' ] },
      { listType: 'none', text: '860-324-6218', margin: this.marginBottom5, style: [ 'font12', 'colorPrimary' ] },
      { listType: 'none', text: 'jdlandscaping.net', link: 'https://jdlandscaping.net', margin: this.marginBottom5, style: [ 'font12', 'colorPrimary' ] },
      { listType: 'none', text: proposal.project.assignedContractor.email, link: `mailto:${proposal.project.assignedContractor.email}`, margin: this.marginBottom5, style: [ 'font12', 'colorPrimary' ] }
    ];

    docDefinition.content.push({
      margin: this.marginLeftNegSpace10,
      ul: endColumnItems,
      unbreakable: true
    });

    return docDefinition;
  }
}
