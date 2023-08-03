// import mail from "@sendgrid/mail";
// import twilio from "twilio";
import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@libs/server/withHandler";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  // send email or async feature ....
  console.log("new booking... seding an email...");
  return res.json({
    ok: true,
  });
}

export default withHandler({
  methods: ["POST"],
  handler: handler,
});
