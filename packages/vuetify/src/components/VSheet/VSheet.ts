// Styles
import './VSheet.sass'

// Utilities
import { defineComponent, h } from 'vue'
import { makeBorderRadiusProps, useBorderRadiusClasses } from '../../composables/border-radius'
import { makeDimensionProps, useDimensionStyles } from '../../composables/dimensions'
import { makeElevationProps, useElevationClasses } from '../../composables/elevation'
import { makeTagProps } from '../../composables/tag'
import { useTheme } from '../../composables/theme'
import makeProps from '../../util/makeProps'

export default defineComponent({
  name: 'VSheet',

  props: makeProps({
    ...makeBorderRadiusProps(),
    ...makeDimensionProps(),
    ...makeElevationProps(),
    ...makeTagProps(),
  }),

  setup (props, { attrs, slots }) {
    const { borderRadiusClasses } = useBorderRadiusClasses(props)
    const { dimensionStyles } = useDimensionStyles(props)
    const { elevationClasses } = useElevationClasses(props)
    const { themeClass } = useTheme()

    return () => (
      h(props.tag, {
        ...attrs,
        class: [
          'v-sheet',
          borderRadiusClasses.value,
          elevationClasses.value,
          themeClass.value,
        ],
        style: [dimensionStyles.value],
      }, slots)
    )
  },

  // props: {
  //   outlined: Boolean,
  //   shaped: Boolean,
  //   tag: {
  //     type: String,
  //     default: 'div',
  //   },
  // },

  // computed: {
  //   classes (): object {
  //     return {
  //       'v-sheet': true,
  //       'v-sheet--outlined': this.outlined,
  //       'v-sheet--shaped': this.shaped,
  //       ...this.themeClasses,
  //       ...this.elevationClasses,
  //       ...this.roundedClasses,
  //     }
  //   },
  //   styles (): object {
  //     return this.measurableStyles
  //   },
  // },

  // render (h): VNode {
  //   const data = {
  //     class: this.classes,
  //     style: this.styles,
  //     on: this.listeners$,
  //   }

  //   return h(
  //     this.tag,
  //     this.setBackgroundColor(this.color, data),
  //     this.$slots.default
  //   )
  // },
})
