export type CrewTypes = {
    data: {
        name: {
          type: String,
          default: null
        },
        status: {
          type: String,
          required: true,
          enum: [any]
        },
        agency: {
          type: String,
          default: null
        },
        image: {
          type: String,
          default: null
        },
        wikipedia: {
          type: String,
          default: null
        },
        launches: [{
            type: any
        }]
      } 
    
}