module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'GDEXc0enRhlMZ-qwqPvUhzaDsn7wxmWcfILPb8SbbTJHUk4qm6YxVf29nhDV55n9'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', 'g^7@k2T9$P!s#A6w'),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT'),
    },
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});
