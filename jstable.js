"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var $ = require("jquery");
var m = require("jspivottable");
var metadata = '<?xml version = "1.0" encoding = "UTF-8"?>'
    + '<OLAPCube Version="2" format="compact" decimalSeparator="." thousandsSeparator="," dateFormat="MDY" textForNullValues="" ShowDataLabelsIn="">'
    + '<OLAPDimension name="Element1" displayName="Datos Dsc" description="Datos Dsc" dataField="F1" visible="Yes" axis="Rows" canDragToPages="true" summarize="yes" align="left" picture="" dataType="character" format="">'
    + '</OLAPDimension>'
    + '<OLAPDimension name="Element2" displayName="Datos Codigo" description="Datos Codigo" dataField="F2" visible="Yes" axis="Rows" canDragToPages="true" summarize="yes" align="left" picture="" dataType="character" format="">'
    + '</OLAPDimension>'
    + '<OLAPMeasure name="Element3" displayName="Datos Valor" description="Datos Valor" dataField="F3" visible="Yes" aggregation="" align="right" picture="ZZZ9" targetValue="0" maximumValue="0" dataType="integer" format="">'
    + '</OLAPMeasure>'
    + '</OLAPCube>';
var data = "<?xml version = \"1.0\" encoding = \"UTF-8\"?>\n\r\n<Recordset RecordCount=\"26\" PageCount=\"6\">\n\t<Page PageNumber=\"1\">\n\t\t<Record>\n\t\t\t<F1>DF                  </F1>\n\t\t\t<F2>1516                </F2>\n\t\t\t<F3>152</F3>\n\t\t</Record>\n\t\t<Record>\n\t\t\t<F1>PR                  </F1>\n\t\t\t<F2>9591                </F2>\n\t\t\t<F3>15</F3>\n\t\t</Record>\n\t\t<Record>\n\t\t\t<F1>UY                  </F1>\n\t\t\t<F2>1561                </F2>\n\t\t\t<F3>5</F3>\n\t\t</Record>\n\t\t<Record>\n\t\t\t<F1>RT                  </F1>\n\t\t\t<F2>ef                  </F2>\n\t\t\t<F3>2</F3>\n\t\t</Record>\n\t\t<Record>\n\t\t\t<F1>PO                  </F1>\n\t\t\t<F2>951                 </F2>\n\t\t\t<F3>1554</F3>\n\t\t</Record>\n\t</Page>\n</Recordset>\n";
$(window).on("load", function () {
    var qv = { collection: {}, fadeTimeouts: {} };
    qv.collection["QUERYVIEWER1_Queryviewer1"] = {};
    qv.collection["QUERYVIEWER1_Queryviewer1"].AutoRefreshGroup = "";
    qv.collection["QUERYVIEWER1_Queryviewer1"].debugServices = false;
    qv.collection["QUERYVIEWER1_Queryviewer1"].ControlName = "Queryviewer1";
    qv.collection["QUERYVIEWER1_Queryviewer1"].Metadata = {};
    qv.collection["QUERYVIEWER1_Queryviewer1"].Metadata.Axes = [];
    qv.collection["QUERYVIEWER1_Queryviewer1"].Metadata.Axes.push({ RaiseItemClick: true });
    qv.collection["QUERYVIEWER1_Queryviewer1"].Metadata.Axes.push({ RaiseItemClick: true });
    qv.collection["QUERYVIEWER1_Queryviewer1"].Metadata.Data = [];
    qv.collection["QUERYVIEWER1_Queryviewer1"].Metadata.Data.push({ RaiseItemClick: true });
    qv.collection["QUERYVIEWER1_Queryviewer1"].Metadata.Data.push({ RaiseItemClick: true });
    var qViewer = { xml: { metadata: "" },
        pivotParams: {
            page: "QUERYVIEWER1_Queryviewer1_GeneralQuery1_pivot_page",
            content: "QUERYVIEWER1_Queryviewer1_GeneralQuery1_pivot_content",
            container: document.getElementById("QUERYVIEWER1Container"),
            RealType: "Table",
            ObjectName: "General.Query1",
            ControlName: "Queryviewer1",
            PageSize: 20,
            metadata: metadata,
            UcId: "QUERYVIEWER1_Queryviewer1",
            AutoResize: false,
            DisableColumnSort: false,
            RememberLayout: true,
            ShowDataLabelsIn: "Columns",
            ServerPaging: true,
            ServerPagingPivot: true,
            ServerPagingCacheSize: 0,
            UseRecordsetCache: true,
            AllowSelection: false,
            SelectLine: true,
            TotalForColumns: "Yes",
            Title: "",
            data: data
        } };
    qViewer.xml.metadata = metadata;
    var QueryViewerTranslations = {
        GXPL_QViewerSinceTheBeginningTrend: "Trend Since The Beginning",
        GXPL_QViewerLastDayTrend: "Trend Last Day",
        GXPL_QViewerLastHourTrend: "Trend Last hour",
        GXPL_QViewerJSAllOption: "Todos",
        GXPL_QViewerJSAscending: "Ascending",
        GXPL_QViewerJSDescending: "Descendiente",
        GXPL_QViewerJSSubtotals: "Subtotal",
        GXPL_QViewerJSRestoreDefaultView: "Restore",
        GXPL_QViewerJSPivotDimensionToColumn: "To COlumns",
        GXPL_QViewerJSPivotDimensionToRow: "To Dimensions",
        GXPL_QViewerJSMoveToFilterBar: "To Filters",
        GXPL_QViewerJSAll: "ALL",
        GXPL_QViewerJSNone: "NONE",
        GXPL_QViewerJSReverse: "Revert",
        GXPL_QViewerSearch: "Search",
        GXPL_QViewerInfoUser: "User Info",
        GXPL_QViewerJSDropFiltersHere: "Drop her filters",
        GXPL_QViewerPopupTitle: "Title p",
        GXPL_QViewerJSVisibleColumns: "Visible columns",
        GXPL_QViewerContextMenuExportXml: "Export to XML",
        GXPL_QViewerContextMenuExportHtml: "To Html",
        GXPL_QViewerContextMenuExportPdf: "To PDF",
        GXPL_QViewerContextMenuExportXls2003: "To xls",
        GXPL_QViewerContextMenuExportXlsx: "To Xlsx",
        GXPL_QViewerJSMeasures: "Measures",
        GXPL_QViewerJSValue: "Value",
        GXPL_QViewerJSTotal: "Grand Total",
        GXPL_QViewerJSTotalFor: "Total for",
        GXPL_QViewerJSPerPage: "Roes:",
        GXPL_QViewerJSPage: "Pags:",
        GXPL_QViewerJSOf: "of",
        GXPL_QViewerJSMoveColumnToLeft: "to left",
        GXPL_QViewerJSMoveColumnToRight: "to right"
    };
    m.renderJSPivot(qViewer.pivotParams, qv.collection, QueryViewerTranslations, qViewer);
});
