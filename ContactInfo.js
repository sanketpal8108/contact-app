class contactInfo{
    static id =0
    constructor(contactType,value){
        this.contactType = contactType
        this.value = value
        this.id = contactInfo.id++
    }
    static newContactInfo(contactType,value){
        try {
            if(typeof contactType!= 'string'){
                throw new Error('Invalid ContactType')
            }
            if(typeof value!= 'string'){
                throw new Error('Invalid value')
            }
            return new contactInfo(contactType,value)
        } catch (error) {
            console.log(error.message);
        }
    }
    #updateContactType(newValue){
        if(typeof newValue != 'string'){
            throw new Error('Invalid Value')
        }
        this.contactType = newValue
    }
    #updateValue(newValue){
        if(typeof newValue != 'string'){
            throw new Error('Invalid Value')
        }
        this.value = newValue
    }
    updateContactInfo(parameter,newValue ){
        if(typeof parameter != 'string'){
            throw new Error('Invalid Parameter')
        }
        switch(parameter){
            case 'contactType':
                this.#updateContactType(newValue)
                break
            case 'value':
                this.#updateValue(newValue)
                break
            default:
                throw new Error('Parameter does not exist')
        }
    }
    
}
module.exports = contactInfo