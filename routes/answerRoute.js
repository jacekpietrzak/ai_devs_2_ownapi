const { Router } = require('express');
const answer = Router();

const { getAnswer } = require('../controllers/answerController');

answer.get('/', async (req, res, next) => {
  return res
    .status(200)
    .json({ status: 'Success', message: 'All answers retrieved successfully' });

  try {
    const logs = await answer();

    return res.status(200).json({
      data: logs,
      status: 'Success',
      message: 'All logs retrieved successfully',
    });
  } catch (error) {
    return res
      .status(500)
      .json({ status: 'error', message: 'something went wrong' });
  }
});

// logs.post('/', async (req, res, next) => {
//   try {
//     const { error } = logValidationSchema.validate(req.body);
//     if (error) {
//       const value = error.details[0].context.label;
//       return res.status(400).send({
//         status: 'error',
//         message: `missing required ${value} - field`,
//       });
//     }

//     const log = await createLog(req.body);

//     return res.status(200).json({
//       data: log,
//       status: 'Success',
//       message: 'New log created successfully',
//     });
//   } catch (error) {
//     return res
//       .status(500)
//       .json({ status: 'error', message: 'something went wrong' });
//   }
// });

module.exports = answer;
