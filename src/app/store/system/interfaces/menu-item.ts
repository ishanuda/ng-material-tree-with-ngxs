export interface MenuItem {
  uid: number;
  pid: number;
  refid: string;

  iconName: string;
  title: string;

  active: boolean;
  disabled?: boolean;
  expanded?: boolean;

  route?: string;

  children?: MenuItem[];
  childCount?: number;
}
