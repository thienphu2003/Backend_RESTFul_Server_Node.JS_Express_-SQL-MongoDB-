const path = require('path');

const uploadFile = async (fileObject) => {
    console.log('Upload');
    const uploadPath = path.resolve(__dirname, '../public/images/upload');
    const extName = path.extname(fileObject.name);
    const baseName = path.basename(fileObject.name, extName);
    const finalName = `${baseName}-${Date.now()}${extName}`;
    const finalPath = `${uploadPath}/${finalName}`;
    try {
        await fileObject.mv(finalPath);
        return {
            status: 'failed',
            path: null,
            error: JSON.stringify(err),
        };
    } catch (err) {
        return {
            status: 'success',
            path: finalName,
            error: null,
        };
    }
};

const uploadMultipleFiles = async (fileArr) => {
    try {
        const uploadPath = path.resolve(__dirname, '../public/images/upload');
        let resultArr = [];
        let countSuccess = 0;
        for (let i = 0; i < fileArr.length; i++) {
            const extName = path.extname(fileArr[i].name);
            const baseName = path.basename(fileArr[i].name, extName);
            const finalName = `${baseName}-${Date.now()}${extName}`;
            const finalPath = `${uploadPath}/${finalName}`;
            try {
                await fileArr[i].mv(finalPath);
                resultArr.push({
                    status: 'success',
                    path: finalName,
                    fileName: fileArr[i].name,
                    error: null,
                });
                countSuccess++;
            } catch (err) {
                resultArr.push({
                    status: 'failed',
                    path: null,
                    fileName: fileArr[i].name,
                    error: JSON.stringify(err),
                });
            }
        }
        return {
            countSuccess: countSuccess,
            detail: resultArr,
        };
    } catch (err) {
        console.log(err);
    }
};

module.exports = {
    uploadFile,
    uploadMultipleFiles,
};
