export const uuid_regex =
  /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i

export function uuid(id) {
  return typeof id === 'string' && uuid_regex.test(id)
}

export default function (ajv) {
  ajv.addFormat('uuid', {
    type: 'string',
    errors: true,
    validate: (data) => uuid(data),
  })
}
