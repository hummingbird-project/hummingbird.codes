```swift
import Hummingbird

let router = Router().get { req, context in
    return "Hello, Swift!"
}
let app = Application(router: router)
try await app.runService()
```
