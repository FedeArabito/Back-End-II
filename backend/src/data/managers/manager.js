class Manager {
  constructor(model) {
    this.model = model;
  }

  create = async (data) => {
    try {
      return await this.model.create(data);
      
    } catch (error) {
        throw error   
    }
    
  };

  readByEmail = async (email) => {
    try {
      return await this.model.findOne({ email }).lean;
      
    } catch (error) {
        throw error   
    }
    
  };

  readById = async (id)=>{
    try {
      return await this.model.find(id).lean()
    } catch (error) {
      throw error
    }
  }

  read = async(data)=>{
    try {
      return await this.model.find(data).lean()
    } catch (error) {
      throw error
    }
  }

  update = async (data, id)=>{
    try {
      return await this.model.findOneAndUpdate({ _id: id }, data, { new: true });
    } catch (error) {
      
    }

  }

  destroy = async(id)=>{
    try {
      return await this.model.findByIdAndDelete(id)
    } catch (error) {
      throw error
    }
  }
  

}

export default Manager