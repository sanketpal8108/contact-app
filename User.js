const Contact = require("./Contact")

class User {
    static allUsers = []
    static id = 0
    constructor(name, age, gender, isadmin) {
        this.name = name
        this.age = age
        this.gender = gender
        this.id = User.id++
        this.isadmin = isadmin
        this.contacts =[]
    }
    static newAdmin(name, age, gender) {
        try {
            if (typeof name != 'string') {
                throw new Error('Invalid Name ')
            }
            if (typeof age != 'number') {
                throw new Error('Invalid Name ')
            }
            if (gender != 'M' && gender != 'F' && gender != 'O') {
                throw new Error('Invalid Name ')
            }
            return new User(name, age, gender, true)
        } catch (error) {
            console.log(error.message);
        }
    }
    newUser(name, age, gender) {
        try {
            if (typeof name != 'string') {
                throw new Error('Invalid Name ')
            }
            if (typeof age != 'number') {
                throw new Error('Invalid Name ')
            }
            if (gender != 'M' && gender != 'F' && gender != 'O') {
                throw new Error('Invalid Name ')
            }
            if (!this.isadmin) {
                throw new Error('Not an admin ')
            }
            let userToBeCreated = new User(name, age, gender, false)
            User.allUsers.push(userToBeCreated)
            return userToBeCreated

        } catch (error) {
            console.log(error.message);
        }
    }
    getAllUser() {
        try {
            if (!this.isadmin) {
                throw new Error('Not an admin ')
            }
            return User.allUsers
        } catch (error) {
            console.log(error.message);
        }
    }
    #findUser(id) {

        let userToFind = null
        for (let i = 0; i < User.allUsers.length; i++) {
            if (id == User.allUsers[i].id) {
                // userToFind= User.allUsers[i]
                return [User.allUsers[i], i]
            }
        }

        return [null, -1]

    }
    #updateUserName(newValue){
        if (typeof newValue != 'string') {
            throw new Error('Invalid Name ')
            
        }
        this.name = newValue

    }
    #updateUserAge(newValue){
        if (typeof newValue != 'number') {
            throw new Error('Invalid Age ')
            
        }
        this.age = newValue
    }
    #updateUserGender(newValue){
        if (newValue != 'M' && newValue != 'F' && newValue != 'O') {
            throw new Error('Invalid Gender ')
        }
        this.gender = newValue
    }
    updateUser(id, parameter, newValue) {
        try {
            if(typeof id != 'number'){
                throw new Error('Invali ID')
            }
            if(typeof parameter != 'string'){
                throw new Error('Invali Parameter')
            }
            if (!this.isadmin) {
                throw new Error('Not an admin ')
            }
            let [userToBeUpdated,indexOfUserToBeUpdated] = this.#findUser(id)
            if (userToBeUpdated == null) {
                throw new Error('User Not Found')
            }
            switch (parameter) {
                case 'name':
                    userToBeUpdated.#updateUserName(newValue)
                    break
                case 'age':
                    userToBeUpdated.#updateUserAge(newValue)        
                    break
                case 'gender':
                    userToBeUpdated.#updateUserGender(newValue)
                    break
                default:
                    throw new Error('Invalid Parameter')
            }
        } catch (error) {
            console.log(error.message);
            }
    }
    deleteUser(id) {
        try {
            if (!this.isadmin) {
                throw new Error('Not an admin ')
            }
            let [userToBeDeleted,indexOfUserToBeDeleted] = this.#findUser(id)
            if (userToBeDeleted == null) {
                throw new Error('User Not Found')
            }
            User.allUsers.splice(indexOfUserToBeDeleted,1)

        } catch (error) {
            console.log(error.message);
        }
    }
    createContact(name){
        try {
            if(this.isadmin){
                throw new Error('Admin Cannot Create Contact')
            }
            
            let newContact = Contact.newContact(name)
            this.contacts.push(newContact)
            return newContact
        } catch (error) {
            console.log(error.message);
        }
    }
    getAllContacts(){
        try {
            if(this.isadmin){
                throw new Error('Admin Cannot Read Contacts')
            }
            return this.contacts
        } catch (error) {
            console.log(error.message);
        }
    }
    #findContact(id){
        for (let index = 0; index < this.contacts.length; index++) {
            if (this.contacts[index].id == id) {
                return [this.contacts[index] , index]
            }            
        }
        return [null,-1]
    }
    updateContact(id,parameter,newValue){
        try {
            if(this.isadmin){
                throw new Error('Admin Cannot Update Contact')
            }
            if (id<0 || typeof id != 'number') {
                throw new Error('Invalid Id')
            }
            let [contactToBeUpdated , indexOfContactToBeUpdated] = this.#findContact(id) 
            if (contactToBeUpdated == null) {
                throw new Error('Contact Not Found')
            }
            contactToBeUpdated.updateContact(parameter,newValue)

        } catch (error) {
            console.log(error.message);
        }
    }
    deleteContact(id){
        try {
            if(this.isadmin){
                throw new Error('Admin Cannot Delete Contact')
            }
            let [contactToBeDeleted , indexOfContactToBeDeleted] = this.#findContact(id) 
            if (contactToBeDeleted == null) {
                throw new Error('Contact Not Found')
            }
            this.contacts.splice(indexOfContactToBeDeleted,1)
        } catch (error) {
            console.log(error.message);
        }
    }
    createContactInfo(contactType,value,contactID){
        try {
            if(this.isadmin){
                throw new Error('Admin Cannot Add ContactInfo')
            }
            let [foundContact , indexOfFoundContact] = this.#findContact(contactID) 
            if (foundContact == null) {
                throw new Error('Contact Not Found')
            }
            
            return foundContact.createContactInfo(contactType,value)
        } catch (error) {
            console.log(error.message);
        }
    }
    getContactInfo(contactID){
        try {
            if(this.isadmin){
                throw new Error('Admin Cannot Read Contacts')
            }
            let [foundContact , indexOfFoundContact] = this.#findContact(contactID) 
            if (foundContact == null) {
                throw new Error('Contact Not Found')
            }
            
            return foundContact.getContactInfo()
        } catch (error) {
            console.log(error.message);
        }
    }
    updateContactInfo(contactID,parameter,newValue ,contactInfoID){
        try {
            if(this.isadmin){
                throw new Error('Admin Cannot Read Contacts')
            }
            if (contactID<0 || typeof contactID != 'number') {
                throw new Error('Invalid ContactID')
            }
            let [foundContact , indexOfFoundContact] = this.#findContact(contactID) 
            if (foundContact == null) {
                throw new Error('Contact Not Found')
            }
            
            foundContact.updateContactInfo(parameter,newValue,contactInfoID)
        } catch (error) {
            console.log(error.message);
        }
    }
    deleteContactInfo(contactID,contactInfoID){
        try {
            if(this.isadmin){
                throw new Error('Admin Cannot Read Contacts')
            }
            if (contactID<0 || typeof contactID != 'number') {
                throw new Error('Invalid ContactID')
            }
            let [foundContact , indexOfFoundContact] = this.#findContact(contactID) 
            if (foundContact == null) {
                throw new Error('Contact Not Found')
            }
            foundContact.deleteContactInfo(contactInfoID)
        } catch (error) {
            console.log(error.message);
        }
    }

}

module.exports = User