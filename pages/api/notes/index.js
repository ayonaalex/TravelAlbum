import dbConnect from '../../../utils/dbConnect';
import Profiles from '../../../models/Profiles';

dbConnect();


export default async (req, res) => {

      const { method } = req;
   
      switch (method) {
          case 'GET':
              try {
                  const notes = await Profiles.find({});
  
                  res.status(200).json({ success: true, data: notes })
              } catch (error) {
                  res.status(400).json({ success: false });
              }
              break;
          case 'POST':
              try {
                  const notes = await Profiles.create(req.body);
                  console.log("Ayona I am Ayona" + req.body);
                  res.status(201).json({ success: true, data: notes })

              } catch (error) {
                  res.status(400).json({ success: false });
              }
              break;
          default:
              res.status(400).json({ success: false });
              break;
      }
  }


 