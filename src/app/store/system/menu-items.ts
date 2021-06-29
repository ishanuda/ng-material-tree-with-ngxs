import { MenuItem } from "./interfaces/menu-item";

export const menuItems: MenuItem[] = [
  {
    refid: "",
    uid: 1,
    pid: 0,
    iconName: "dashboard",
    title: "Test Item A (with children)",
    active: false,
    disabled: false,
    expanded: false,
    route: "dashboard",
    children: [
      {
        refid: "",
        uid: 2,
        pid: 1,
        iconName: "shopping_cart",
        title: "Test Sub Item A (with children)",
        active: false,
        disabled: false,
        expanded: false,
        route: "log-test",
        children: [
          {
            refid: "",
            uid: 3,
            pid: 2,
            iconName: "account_circle",
            title: "Test Sub Item A - 1",
            active: false,
            disabled: false,
            expanded: false,
            route: "log-test"
          },
          {
            refid: "",
            uid: 4,
            pid: 2,
            iconName: "star_rate",
            title: "Test Sub Item A - 2",
            active: false,
            disabled: false,
            expanded: false,
            route: "log-test"
          }
        ]
      },
      {
        refid: "",
        uid: 5,
        pid: 1,
        iconName: "build",
        title: "Test Sub Item B (with children)",
        active: false,
        disabled: false,
        expanded: false,
        route: "log-test",
        children: [
          {
            refid: "",
            uid: 6,
            pid: 5,
            iconName: "donut_large",
            title: "Test Sub Item B - 1",
            active: false,
            disabled: false,
            expanded: false,
            route: "log-test"
          },
          {
            refid: "",
            uid: 7,
            pid: 5,
            iconName: "receipt",
            title: "Test Sub Item B - 2",
            active: false,
            disabled: false,
            expanded: false,
            route: "log-test"
          }
        ]
      }
    ]
  },
  {
    refid: "",
    uid: 8,
    pid: 0,
    iconName: "settings",
    title: "Test Item B (Single Item)",
    active: false,
    disabled: false,
    expanded: false,
    route: "settings"
  },
  {
    refid: "",
    uid: 9,
    pid: 0,
    iconName: "help",
    title: "Test Item C (Single Item)",
    active: false,
    disabled: false,
    expanded: false,
    route: "help"
  }
];
