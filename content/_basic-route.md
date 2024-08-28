```swift
import Hummingbird
import Meow // From MongoKitten

router.get("/videos/:id") { req, context in
  let id = try context.parameters.require(
    "id",
    as: Reference<Video>.self
  )
  return try await id.resolve(in: db)
}
```
