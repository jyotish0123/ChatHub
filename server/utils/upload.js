import multer from "multer";
import { GridFsStorage } from "multer-gridfs-storage";


const storage = new GridFsStorage({
     url: `mongodb://user:12345@ac-mchdl2p-shard-00-00.wxgl99v.mongodb.net:27017,ac-mchdl2p-shard-00-01.wxgl99v.mongodb.net:27017,ac-mchdl2p-shard-00-02.wxgl99v.mongodb.net:27017/?ssl=true&replicaSet=atlas-4jgppt-shard-0&authSource=admin&retryWrites=true&w=majority`,
     options:{useUnifiedTopology:true,useNewUrlParser:true},
     file:(request,file)=>{
        const match=["image/png","image/jpg"];

        if(match.indexOf(file.mimeType)===-1)
        {
            return `${Date.now()}-file-${file.originalname}`;
        }
        return {
            bucketName:"photos",
            filename:`${Date.now()}-file-${file.originalname}`,
        }
     }
});

export default multer({storage});
