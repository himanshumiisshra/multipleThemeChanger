export interface DeCardView{
    cvHeader?:CvHeader;
    cvSubHeader?:CvSubHeader;
    cvFooter?:CvHeader;
    cvActions?:CvAction;
}
export interface CvSubHeader {
    cvSubHeading?: string;
}

export interface CvHeader{
    cvHeading?:string;
    cvSubHeading?:string;
    cvActions?:CvAction[];
    cvContextMenus?:CvContextMenu[]
    cvHelp?:string;
}

export interface CvAction{
    actionIcon?:string;
    actionLabel?:string;
}

export interface CvContextMenu{
    contextMenuIcon?:string;
    contextMenuLabel?:string;
    contextMenuType?:string;
}

export interface DeCardConfig{
    isShowBack:boolean;
}