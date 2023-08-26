const contactInfo = require("./ContactInfo")

class Contact{
    static id = 0 
    constructor(name){
       
        
        this.name = name
        this.contactInfos = []
        this .id = Contact.id ++
    }
    static newContact(name){
        try {
            if (typeof name != 'string') {
                throw new Error('Invalid name')
            }
            return new Contact(name)
        } catch (error) {
            console.log(error.message);
        }
    }
    updateContact(parameter,newValue){
        if(typeof parameter != 'string'){
            throw new Error('Invalid Parameter')
        }
        switch(parameter){
            case 'name':
                this.#updateName(newValue)
                break
            default:
                throw new Error('Parameter Does Not Exist')
        }
    }
    #updateName(newValue){
        if(typeof newValue != 'string'){
            throw new Error('Invalid Value ')
        }
        this.name = newValue
    }
    
    getContactInfo(){
        return this.contactInfos
    }

    createContactInfo(contactType,value){
        let createContactInfo = contactInfo.newContactInfo(contactType,value)
        this.contactInfos.push(createContactInfo)
        return createContactInfo
    }
    #findContactInfo(contactInfoID){
        for (let index = 0; index < this.contactInfos.length; index++) {
            if(this.contactInfos[index].id  == contactInfoID){
                return [this.contactInfos[index] , index]
            }
            
        }
        return [null ,-1]
    }
    updateContactInfo(parameter,newValue , contactInfoID){
        let [foundContactInfo , indexOfFoundContactInfo] = this.#findContactInfo(contactInfoID)
        if (foundContactInfo == null) {
            throw new Error('ContactInfo Not Found')
        }
        foundContactInfo.updateContactInfo(parameter,newValue )
    }
    deleteContactInfo(contactInfoID){
        let [foundContactInfo , indexOfFoundContactInfo] = this.#findContactInfo(contactInfoID)
        if(foundContactInfo == null){
            throw new Error('ContactInfo Not Found')
        }
        this.contactInfos.splice(indexOfFoundContactInfo,1)
    }
}


module.exports = Contact