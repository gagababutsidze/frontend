
 interface moviesTypes {
   link: string;
   _id: string;
   name: string;
   description: string;
   image: string;
   comments: [
     {
       _id: string;
       movieId: string;
       comment: string;
       userId: string;
       user: {
         username: string;
         name: string;
         id: string;
       };
     }
   ];
 }

 interface userType {
  _id : string,
  name: string,
  username: string
 }
 

 


 export default moviesTypes