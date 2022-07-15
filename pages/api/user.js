// import db from mongodb:




export default async function handler(req, res) {
    switch (req.method) {
        case 'POST': {
            return updatePost(req, res);
        }
    }
}