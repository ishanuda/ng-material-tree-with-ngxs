import {
  animate,
  style,
  transition,
  query,
  trigger,
  stagger
} from "@angular/animations";

export const listAnimation = trigger("listAnimation", [
  transition("* <=> *", [
    // each time the binding value changes
    query(
      ":enter",
      [
        style({ opacity: 0 }),
        stagger("80ms", [animate("800ms ease-out", style({ opacity: 1 }))])
      ],
      { optional: true }
    ),
    query(
      ":leave",
      [
        // stagger('60ms', [
        animate("200ms", style({ opacity: 0 }))
        // ])
      ],
      { optional: true }
    )
  ])
]);
