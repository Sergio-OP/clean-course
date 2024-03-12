(()=>{

    //* Aplicar el principio de responsabilidad única
    //* Priorizar la composición frente a la herencia

    type HtmlType = 'input'|'select'|'textarea'|'radio';
   
    interface HtmlElementProperties {
        id: string;
        type: HtmlType;
    }

    class HtmlElement {
        public id: string;
        public type: HtmlType;

        constructor({id, type}: HtmlElementProperties){
            this.id = id;
            this.type = type;
        }
    }


    interface InputAttributesProperties {
        value: string;
        placeholder: string;
    } 

    class InputAttributes {
        public value: string;
        public placeholder: string;

        constructor({
            value,
            placeholder,
        }: InputAttributesProperties){
            this.value = value;
            this.placeholder = placeholder;
        }
    }

    class InputEvents {
        setFocus() {};
        getValue() {};
        isActive() {};
        removeValue() {};
    }


    interface InputElementProperties {
        id: string;
        type: HtmlType;
        value: string;
        placeholder: string;
    }
    
    class InputElement{
        public htmlElement: HtmlElement;
        public inputAttributes: InputAttributes;
        public inputEvents: InputEvents;

        constructor({
            id, type,
            value, placeholder
        }: InputElementProperties){
            this.htmlElement = new HtmlElement({id, type});
            this.inputAttributes = new InputAttributes({value, placeholder});
            this.inputEvents = new InputEvents();
        }
    }

    //? Idea para la nueva clase InputElement

    const inputElement = new InputElement({
        id: 'id',
        type: 'input',
        value: 'value',
        placeholder: 'placeholder',
    });

    console.log({ inputElement });

})()