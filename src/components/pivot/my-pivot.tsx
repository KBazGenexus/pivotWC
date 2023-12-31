import { Component, Listen, Prop, h } from '@stencil/core';
import { renderJSPivot, OAT } from 'jspivottable';

const PIVOT_PAGE = 'QUERYVIEWER1_Queryviewer1_GeneralQuery1_pivot_page';
const PIVOT_CONTENT = 'QUERYVIEWER1_Queryviewer1_GeneralQuery1_pivot_content';

@Component({
  tag: 'my-pivot',
  styleUrl: 'my-pivot.scss',
  shadow: false,
})
export class Pivot {
  private queryViewerContainer: HTMLDivElement;
  /**
   * metadata
   */
  @Prop() metadata: string =
    '<?xml version = "1.0" encoding = "UTF-8"?>\n\r\n<OLAPCube Version="2" format="compact" decimalSeparator="." thousandsSeparator="," dateFormat="MDY" textForNullValues="" ShowDataLabelsIn="Columns">\n\t<OLAPDimension name="Element1" displayName="Datos Dsc" description="Datos Dsc" dataField="F1" visible="Yes" axis="Rows" canDragToPages="true" summarize="yes" align="left" picture="" dataType="character" format="">\n\t</OLAPDimension>\n\t<OLAPDimension name="Element2" displayName="Datos Codigo" description="Datos Codigo" dataField="F2" visible="Yes" axis="Rows" canDragToPages="true" summarize="yes" align="left" picture="" dataType="character" format="">\n\t</OLAPDimension>\n\t<OLAPMeasure name="Element3" displayName="Datos Valor" description="Datos Valor" dataField="F3" visible="Yes" aggregation="" align="right" picture="ZZZ9" targetValue="0" maximumValue="0" dataType="integer" format="">\n\t</OLAPMeasure>\n</OLAPCube>\n';

  /**
   * data
   */
  @Prop() data: string;

  /**
   * qViewer
   */
  @Prop() qViewer: any;

  /**
   * qv
   */
  @Prop() qv = {
    collection: {
      QUERYVIEWER1_Queryviewer1: {
        AutoRefreshGroup: '',
        debugServices: false,
        ControlName: 'Queryviewer1',
        Metadata: {
          Axes: [{ RaiseItemClick: true }, { RaiseItemClick: true }],
          Data: [{ RaiseItemClick: true }, { RaiseItemClick: true }],
        },
      },
    },
    fadeTimeouts: {},
  };

  /**
   * QueryViewerTranslations
   */
  @Prop() readonly QueryViewerTranslations = {
    GXPL_QViewerSinceTheBeginningTrend: 'Trend Since The Beginning',
    GXPL_QViewerLastDayTrend: 'Trend Last Day',
    GXPL_QViewerLastHourTrend: 'Trend Last hour',
    GXPL_QViewerJSAllOption: 'Todos',
    GXPL_QViewerJSAscending: 'Ascending',
    GXPL_QViewerJSDescending: 'Descendiente',
    GXPL_QViewerJSSubtotals: 'Subtotal',
    GXPL_QViewerJSRestoreDefaultView: 'Restore',
    GXPL_QViewerJSPivotDimensionToColumn: 'To COlumns',
    GXPL_QViewerJSPivotDimensionToRow: 'To Dimensions',
    GXPL_QViewerJSMoveToFilterBar: 'To Filters',
    GXPL_QViewerJSAll: 'ALL',
    GXPL_QViewerJSNone: 'NONE',
    GXPL_QViewerJSReverse: 'Revert',
    GXPL_QViewerSearch: 'Search',
    GXPL_QViewerInfoUser: 'User Info',
    GXPL_QViewerJSDropFiltersHere: 'Drop her filters',
    GXPL_QViewerPopupTitle: 'Title p',
    GXPL_QViewerJSVisibleColumns: 'Visible columns',
    GXPL_QViewerContextMenuExportXml: 'Export to XML',
    GXPL_QViewerContextMenuExportHtml: 'To Html',
    GXPL_QViewerContextMenuExportPdf: 'To PDF',
    GXPL_QViewerContextMenuExportXls2003: 'To xls',
    GXPL_QViewerContextMenuExportXlsx: 'To Xlsx',
    GXPL_QViewerJSMeasures: 'Measures',
    GXPL_QViewerJSValue: 'Value',
    GXPL_QViewerJSTotal: 'Grand Total',
    GXPL_QViewerJSTotalFor: 'Total for',
    GXPL_QViewerJSPerPage: 'Roes:',
    GXPL_QViewerJSPage: 'Pags:',
    GXPL_QViewerJSOf: 'of',
    GXPL_QViewerJSMoveColumnToLeft: 'to left',
    GXPL_QViewerJSMoveColumnToRight: 'to right',
  };

  @Listen('RequestPageDataForPivotTable', { target: 'document' })
  handleRequestPageDataForPivotTable(event: CustomEvent) {
    const data = `<?xml version = "1.0" encoding = "UTF-8"?>
    <Recordset RecordCount="10" PageCount="1">
      <Page PageNumber="1">
        <Columns>
          <Header DataField="F1">
          </Header>
        </Columns>
        <Rows>
          <Row>
            <Header>
              <F2>2023-02-12</F2>
            </Header>
            <Cells>
              <Cell>120</Cell>
            </Cells>
          </Row>
          <Row>
            <Header>
              <F2>2023-05-15</F2>
            </Header>
            <Cells>
              <Cell>100</Cell>
            </Cells>
          </Row>
          <Row>
            <Header>
              <F2>2023-05-16</F2>
            </Header>
            <Cells>
              <Cell>200</Cell>
            </Cells>
          </Row>
          <Row>
            <Header>
              <F2>2023-05-17</F2>
            </Header>
            <Cells>
              <Cell>150</Cell>
            </Cells>
          </Row>
          <Row>
            <Header>
              <F2>2023-05-18</F2>
            </Header>
            <Cells>
              <Cell>250</Cell>
            </Cells>
          </Row>
          <Row>
            <Header>
              <F2>2023-05-19</F2>
            </Header>
            <Cells>
              <Cell>120</Cell>
            </Cells>
          </Row>
          <Row>
            <Header>
              <F2>2023-05-20</F2>
            </Header>
            <Cells>
              <Cell>400</Cell>
            </Cells>
          </Row>
          <Row>
            <Header>
              <F2>2023-06-20</F2>
            </Header>
            <Cells>
              <Cell>80</Cell>
            </Cells>
          </Row>
          <Row>
            <Header>
              <F2>2023-09-10</F2>
            </Header>
            <Cells>
              <Cell>233</Cell>
            </Cells>
          </Row>
          <Row>
            <Header Subtotal="true">
            </Header>
            <Cells>
              <Cell>1653</Cell>
            </Cells>
          </Row>
        </Rows>
      </Page>
    </Recordset>`;
    (event as any).parameter.callback(data);
    // this.parameterSetPageDataForPivotTable = (event as any).parameter.callback;
  }

  componentDidLoad() {
    const metadata = `<?xml version = "1.0" encoding = "UTF-8"?>

<OLAPCube Version="2" format="compact" decimalSeparator="." thousandsSeparator="," dateFormat="MDY" textForNullValues="" ShowDataLabelsIn="Columns">
	<OLAPDimension name="Element3" displayName="Fecha" description="Fecha" dataField="F2" visible="Yes" axis="Rows" canDragToPages="true" summarize="yes" align="left" picture="99/99/99" dataType="date" format="">
	</OLAPDimension>
	<OLAPMeasure name="Element1" displayName="Sum of Gasto" description="Sum of Gasto" dataField="F1" visible="Yes" aggregation="sum" align="right" picture="ZZZZZZZZ9.99" targetValue="0" maximumValue="0" dataType="real" format="">
	</OLAPMeasure>
</OLAPCube>
`;
    this.qViewer = {
      xml: { metadata: metadata },
      pivotParams: {
        page: PIVOT_PAGE,
        content: PIVOT_CONTENT,
        container: this.queryViewerContainer,
        RealType: 'PivotTable' as any,
        ObjectName: 'General.Query1',
        ControlName: 'Queryviewer1',
        PageSize: 20,
        metadata: metadata,
        UcId: 'QUERYVIEWER1_Queryviewer1',
        AutoResize: false,
        DisableColumnSort: false,
        RememberLayout: true,
        ShowDataLabelsIn: 'Columns' as any,
        ServerPaging: true,
        ServerPagingPivot: true,
        ServerPagingCacheSize: 0,
        UseRecordsetCache: true,
        AllowSelection: false,
        SelectLine: true,
        TotalForColumns: 'Yes' as any,
        TotalForRows: undefined,
        Title: '',
      },
      oat_element: undefined,
    };

    // eslint-disable-next-line eqeqeq
    if (OAT.Loader != undefined) {
      renderJSPivot(this.qViewer.pivotParams, this.qv.collection, this.QueryViewerTranslations, this.qViewer);
    } else {
      OAT.Loader.addListener(function () {
        renderJSPivot(this.qViewer.pivotParams, this.pivotCollection.collection, this.QueryViewerTranslations, this.qViewer);
      });
    }
  }

  render() {
    return (
      <div class="gx_usercontrol qv-pivottable QueryViewer-pivottable" id="QUERYVIEWER1Container" ref={el => (this.queryViewerContainer = el)}>
        <div id={PIVOT_PAGE} class="pivot_filter_div"></div>
        <div id={PIVOT_CONTENT} class="conteiner_table_div"></div>
      </div>
    );
  }
}
