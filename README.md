# MongoDB Aggregation: Handling Missing Fields in $avg Operator

This example demonstrates a potential issue in MongoDB aggregation pipelines when dealing with the `$avg` operator and missing fields.  The initial code may return inaccurate averages if the `age` field is sometimes missing from user documents. The solution shows how to gracefully handle this using the `$ifNull` operator to provide a default value when a field is missing.

This issue is particularly relevant when working with data that may be incomplete or inconsistently populated.  Proper handling of missing data ensures accurate and reliable results in your aggregations.