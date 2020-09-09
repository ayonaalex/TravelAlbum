import dbConnect from '../../../utils/dbConnect';
import Profiles from '../../../models/Profiles';

dbConnect();



export default async (req, res) => {
    const {
        query: { id },
        method
    } = req;

    switch (method) {
        case 'GET':
            try {
                const note = await Profiles.findById(id);

                if (!note) {
                    return res.status(400).json({ success: false });
                }

                res.status(200).json({ success: true, data: note });
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        case 'DELETE':
            try {
                const deletedNote = await Profiles.deleteOne({ _id: id });

                if (!deletedNote) {
                    return res.status(400).json({ success: false })
                }

                res.status(200).json({ success: true, data: {} });
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break;
        default:
            res.status(400).json({ success: false })
            break;
    }
}