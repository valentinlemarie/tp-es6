



class Pub {
    constructor(name,firstName , lastName ,mail,openDay,start , end ,beer){
        this._name = name;
        this.owner(firstName,lastName,mail);
        this._openDay = openDay;
        this.openHours(start,end);
        this._beer = beer ;
    }

    owner(firstName,lastName,mail){
        this._firstName = firstName;
        this._lastName = lastName;
        this._mail = mail ;
    }

    openHours(start, end){
        this.start = start;
        this.end = end;
    }
    get name(){
        return this._name;
    }

    get firstName(){
        return this._firstName;
    }

    get lastName(){
        return this._lastName;
    }
}


module.exports = {
    Pub: Pub
}


