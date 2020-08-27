# ECS - SAMPLE

### Defaults
- `LOG_LEVEL` - Log level to be used by the system.
    - `Possible Values` - `DEBUG`, `INFO`, `WARN`, `ERROR`
- `TZ` - Time zone to be used by the `nodejs` engine. This will affect all javascript dates. -- *optional*
    - `Possible Values` - `America/Vancouver`, and all other timezones defined by ISO
- `AWS_NODEJS_CONNECTION_REUSE_ENABLED` - Enable this to enabled http connection reuse on AWS js sdk. -- *optional*
    - `Possible Values` - `true` or `false`

### Resources
- `TABLE_NAME` - Dynamo DB table name.
- `DATABASE_REGION` - Dynamo DB table region.

### Monitoring
- `DLQ_ALERT_EMAIL` - The dead letter queue alert email. The email which will be receiving alerts from queue errors.
- `DLQ_ALERT_URL` - The dead letter queue alert URL.
- `LOG_ALERT_ESPRESSION` - Cloud watch expression to match with logs that should send an alert.