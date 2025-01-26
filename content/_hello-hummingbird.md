```swift
import Hummingbird

let router = Router().get { req, context in
    return "Hello, Swift!"
}
try await Application(router: router).runService()
```
