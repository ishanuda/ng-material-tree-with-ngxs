export interface TocFlatNode {
  uid: number;
  pid: number;
  refid: string;
  iconName: string;
  active: boolean;
  disabled?: boolean;
  expanded?: boolean;

  title?: string;
  route?: string;

  expandable: boolean;
  level: number;
}
