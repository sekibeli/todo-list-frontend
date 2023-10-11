export class Todo {
    id?: string;
    title: string;
   
    author: number;
    created_at: string;
   checked: boolean;


    constructor(obj?:any){
        this.id = obj ? obj.id: '';
        this.title = obj ? obj.title : '';
        this.author = obj ? obj.author : '';
        this.created_at = obj? obj.created_at : '';
        this.checked = obj ? obj.checked: false;
      

    }

    public toJSON(){
    return {
        id: this.id,
        title : this.title,
        author : this.author,
        created_at: this.created_at,
        checked : this.checked
       
    }
    
    }

  
    
}