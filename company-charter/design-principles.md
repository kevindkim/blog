# S-Tier SaaS Dashboard Design Principles for Claude Code

> Forked from OneRedOak/claude-code-workflows - Design principles inspired by Stripe, Airbnb, Linear for building world-class user interfaces

## I. Core Design Philosophy & Strategy
- **Users First**: Prioritize user needs, workflows, and ease of use above all else
- **Meticulous Craft**: Aim for precision and high-quality UI elements - every pixel matters
- **Speed & Performance**: Design for fast load times and responsive interactions - users notice delays
- **Simplicity & Clarity**: Create uncluttered interfaces with clear instructions and intuitive flows
- **Focus & Efficiency**: Help users achieve their goals quickly without unnecessary friction
- **Consistency**: Maintain uniform design language across all components and pages
- **Accessibility (WCAG AA+)**: Design for inclusivity - consider color contrast, screen readers, keyboard navigation
- **Opinionated Design**: Establish clear, efficient default workflows that guide users toward success

## II. Design System Foundation

### Color Palette
- **Primary brand color** with sufficient contrast ratios
- **Neutral color scale** (typically 9-11 shades from white to black)
- **Semantic colors** (success, warning, error, info)
- **Dark mode palette** with proper contrast and eye strain considerations

### Typography Scale
- **Clean sans-serif font** (Inter, SF Pro, or similar)
- **Modular type sizes** following consistent scale (1.2x, 1.4x ratios)
- **Limited font weights** (typically regular, medium, semibold)
- **Proper line heights** for readability (1.4-1.6 for body text)

### Spacing & Layout
- **8px grid system** or consistent spacing units (4px, 8px, 16px, 24px, 32px, 48px, 64px)
- **Border radii** system (0px, 4px, 8px, 12px for consistency)
- **Maximum content widths** to prevent text lines from becoming too long

### Core UI Components
Develop these foundational components first:
- **Buttons** (primary, secondary, outline, ghost, danger states)
- **Input Fields** (text, password, search, textarea with proper states)
- **Form Controls** (checkboxes, radio buttons, toggles, selects)
- **Cards** with consistent padding and shadow treatment
- **Data Tables** with sorting, filtering, pagination
- **Navigation** (main nav, breadcrumbs, tabs)
- **Feedback Elements** (modals, toasts, tooltips, alerts)
- **Status Indicators** (badges, tags, progress bars, loading states)
- **Media Elements** (avatars, icons, image containers)

## III. Layout, Visual Hierarchy & Structure

### Responsive Grid System
- **Mobile-first approach** with breakpoints at 640px, 768px, 1024px, 1280px
- **Flexible grid system** (CSS Grid or Flexbox)
- **Consistent container max-widths** and padding

### Visual Hierarchy Principles
- **Size relationships** - larger elements draw attention first
- **Color contrast** - use color strategically to guide focus
- **Strategic white space** - group related elements, separate unrelated ones
- **Consistent alignment** - everything should line up to invisible grid lines
- **Clear content priority** - primary actions should be visually prominent

### Dashboard Layout Standards
- **Left sidebar navigation** or **top horizontal navigation**
- **Consistent header height** across all pages
- **Main content area** with proper padding and max-widths
- **Secondary sidebars** for contextual information when needed

## IV. Interaction Design & Animations

### Micro-interactions
- **Purposeful animations** that provide feedback (button press, form submission)
- **Smooth transitions** between states (0.15-0.3 seconds duration)
- **Easing functions** that feel natural (ease-out for entrances, ease-in for exits)

### Loading & Feedback States
- **Skeleton screens** for content loading
- **Progress indicators** for multi-step processes
- **Success/error messaging** that's clear and actionable
- **Disabled states** that clearly indicate unavailability

### Keyboard & Accessibility
- **Tab navigation** through all interactive elements
- **Focus indicators** that are clearly visible
- **Keyboard shortcuts** for power users
- **Screen reader compatibility** with proper ARIA labels

## V. Specific Application Patterns

### Data-Heavy Applications
- **Scannable table design** with proper row heights and spacing
- **Smart pagination** or infinite scroll with performance considerations
- **Advanced filtering** that's discoverable but not overwhelming
- **Bulk actions** for efficiency with clear selection states
- **Export functionality** with progress feedback

### Form-Heavy Applications
- **Logical field grouping** with clear section headers
- **Inline validation** with helpful error messages
- **Progressive disclosure** for complex forms
- **Auto-save indicators** for user confidence
- **Clear required field marking** and validation states

### Dashboard & Analytics
- **Hierarchy of information** from most to least critical
- **Consistent chart styling** with accessible color palettes
- **Interactive elements** with clear hover and active states
- **Contextual drill-down** capabilities
- **Export and sharing** functionality

## VI. Quality Standards & Testing

### Design Review Checklist
- [ ] **Accessibility audit** - color contrast, keyboard navigation, screen reader testing
- [ ] **Mobile responsiveness** across different device sizes
- [ ] **Loading performance** - optimize images, minimize layout shifts
- [ ] **Cross-browser compatibility** testing
- [ ] **User testing** with actual target users

### Consistency Audit
- [ ] **Color usage** follows established palette
- [ ] **Typography** uses defined scale and hierarchy
- [ ] **Spacing** follows grid system
- [ ] **Component variations** are documented and consistent
- [ ] **Interaction patterns** behave predictably across the application

## VII. Implementation Notes for Claude Code

When building UI with Claude Code:

1. **Reference this document** for every UI-related task
2. **Build component libraries** rather than one-off elements
3. **Consider dark mode** from the beginning, not as an afterthought
4. **Test accessibility** at each stage, not just at the end
5. **Optimize for performance** - consider bundle size, image optimization, code splitting
6. **Document design decisions** for future consistency

## VIII. Tools & Resources

### Recommended Design Tools
- **Figma** for design system creation and prototyping
- **Tailwind CSS** for consistent utility-first styling
- **Radix UI** or **Headless UI** for accessible component foundations
- **Lucide** or **Heroicons** for consistent iconography

### Reference Applications
Study these applications for inspiration:
- **Stripe Dashboard** - excellent use of white space and data presentation
- **Linear** - outstanding interaction design and performance
- **Airbnb Host Dashboard** - clear information hierarchy
- **Notion** - flexible layout system and consistent interactions
- **GitHub** - comprehensive design system and accessibility

---

*This document should be referenced for every UI/UX decision in Claude Code projects. When in doubt, prioritize user experience and accessibility over visual flourishes.*
