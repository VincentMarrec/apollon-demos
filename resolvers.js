export default async function(){
    
    this.Mutation.file_upload = async function file_upload(root, { file }, { logger }){
        const { createReadStream, filename, mimetype, encoding } = await file
            .catch(err => {
                logger.error("An error occurred while trying to read the file", err);
                throw "An error occurred while trying to read the file";
            });

        await new Promise((resolve, reject) => {
            createReadStream()
                .on('data', data => {
                    // Process data here
                    logger.info("Data received", data);
                })
                .on('error', error => {
                    logger.error("An error occurred while processing the data", error);
                    throw "An error occurred while processing the data";
                })
                .on('end', resolve);
        });

        return true;
    };
}