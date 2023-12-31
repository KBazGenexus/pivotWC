/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "./stencil-public-runtime";
export namespace Components {
    interface MyPivot {
        /**
          * QueryViewerTranslations
         */
        "QueryViewerTranslations": { GXPL_QViewerSinceTheBeginningTrend: string; GXPL_QViewerLastDayTrend: string; GXPL_QViewerLastHourTrend: string; GXPL_QViewerJSAllOption: string; GXPL_QViewerJSAscending: string; GXPL_QViewerJSDescending: string; GXPL_QViewerJSSubtotals: string; GXPL_QViewerJSRestoreDefaultView: string; GXPL_QViewerJSPivotDimensionToColumn: string; GXPL_QViewerJSPivotDimensionToRow: string; GXPL_QViewerJSMoveToFilterBar: string; GXPL_QViewerJSAll: string; GXPL_QViewerJSNone: string; GXPL_QViewerJSReverse: string; GXPL_QViewerSearch: string; GXPL_QViewerInfoUser: string; GXPL_QViewerJSDropFiltersHere: string; GXPL_QViewerPopupTitle: string; GXPL_QViewerJSVisibleColumns: string; GXPL_QViewerContextMenuExportXml: string; GXPL_QViewerContextMenuExportHtml: string; GXPL_QViewerContextMenuExportPdf: string; GXPL_QViewerContextMenuExportXls2003: string; GXPL_QViewerContextMenuExportXlsx: string; GXPL_QViewerJSMeasures: string; GXPL_QViewerJSValue: string; GXPL_QViewerJSTotal: string; GXPL_QViewerJSTotalFor: string; GXPL_QViewerJSPerPage: string; GXPL_QViewerJSPage: string; GXPL_QViewerJSOf: string; GXPL_QViewerJSMoveColumnToLeft: string; GXPL_QViewerJSMoveColumnToRight: string; };
        /**
          * data
         */
        "data": string;
        /**
          * metadata
         */
        "metadata": string;
        /**
          * qViewer
         */
        "qViewer": any;
        /**
          * qv
         */
        "qv": { collection: { QUERYVIEWER1_Queryviewer1: { AutoRefreshGroup: string; debugServices: boolean; ControlName: string; Metadata: { Axes: { RaiseItemClick: boolean; }[]; Data: { RaiseItemClick: boolean; }[]; }; }; }; fadeTimeouts: {}; };
    }
}
declare global {
    interface HTMLMyPivotElement extends Components.MyPivot, HTMLStencilElement {
    }
    var HTMLMyPivotElement: {
        prototype: HTMLMyPivotElement;
        new (): HTMLMyPivotElement;
    };
    interface HTMLElementTagNameMap {
        "my-pivot": HTMLMyPivotElement;
    }
}
declare namespace LocalJSX {
    interface MyPivot {
        /**
          * QueryViewerTranslations
         */
        "QueryViewerTranslations"?: { GXPL_QViewerSinceTheBeginningTrend: string; GXPL_QViewerLastDayTrend: string; GXPL_QViewerLastHourTrend: string; GXPL_QViewerJSAllOption: string; GXPL_QViewerJSAscending: string; GXPL_QViewerJSDescending: string; GXPL_QViewerJSSubtotals: string; GXPL_QViewerJSRestoreDefaultView: string; GXPL_QViewerJSPivotDimensionToColumn: string; GXPL_QViewerJSPivotDimensionToRow: string; GXPL_QViewerJSMoveToFilterBar: string; GXPL_QViewerJSAll: string; GXPL_QViewerJSNone: string; GXPL_QViewerJSReverse: string; GXPL_QViewerSearch: string; GXPL_QViewerInfoUser: string; GXPL_QViewerJSDropFiltersHere: string; GXPL_QViewerPopupTitle: string; GXPL_QViewerJSVisibleColumns: string; GXPL_QViewerContextMenuExportXml: string; GXPL_QViewerContextMenuExportHtml: string; GXPL_QViewerContextMenuExportPdf: string; GXPL_QViewerContextMenuExportXls2003: string; GXPL_QViewerContextMenuExportXlsx: string; GXPL_QViewerJSMeasures: string; GXPL_QViewerJSValue: string; GXPL_QViewerJSTotal: string; GXPL_QViewerJSTotalFor: string; GXPL_QViewerJSPerPage: string; GXPL_QViewerJSPage: string; GXPL_QViewerJSOf: string; GXPL_QViewerJSMoveColumnToLeft: string; GXPL_QViewerJSMoveColumnToRight: string; };
        /**
          * data
         */
        "data"?: string;
        /**
          * metadata
         */
        "metadata"?: string;
        /**
          * qViewer
         */
        "qViewer"?: any;
        /**
          * qv
         */
        "qv"?: { collection: { QUERYVIEWER1_Queryviewer1: { AutoRefreshGroup: string; debugServices: boolean; ControlName: string; Metadata: { Axes: { RaiseItemClick: boolean; }[]; Data: { RaiseItemClick: boolean; }[]; }; }; }; fadeTimeouts: {}; };
    }
    interface IntrinsicElements {
        "my-pivot": MyPivot;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "my-pivot": LocalJSX.MyPivot & JSXBase.HTMLAttributes<HTMLMyPivotElement>;
        }
    }
}
