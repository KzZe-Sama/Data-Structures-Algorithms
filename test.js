class Alpha{
    constructor(id,name,phone,email,address,bio){
        this.id = id;
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.address = address;
        this.bio = bio;
    }

    getName=()=>{
        return "Name:"+this.name
    }
}
