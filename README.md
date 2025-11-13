# About Beat99 Codebase

## File Structure
- components  (Hold single self contained piece of UI)
    - folder/feature name
        - [base].html eg. sidebar.html, button.html etc
        - [base].css, [base].js etc files
- modules (Holds collection of components/single feature)
    - folder/feature name
        - [base].html eg. sidebar.html, button.html etc
        - [base].css, [base].js etc files

### To import a component/module (it's html source)
- Use HTML ATTRIBUTES (data-import) or custom data attributs of your choice
- Specify the relative part to the component/module.



<!-- ## Inside every module/component that uses another component, -->