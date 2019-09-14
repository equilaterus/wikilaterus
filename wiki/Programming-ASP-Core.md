---
layout: page
title: Programming ASP Core
wikiPageName: Programming-ASP-Core
menu: wiki
---

## Official guides

* Build web APIs with [ASP Core 3.0](https://docs.microsoft.com/en-us/aspnet/core/web-api/?view=aspnetcore-3.0)
  * Tutorial VS Code - [ASP Core 3.0](https://docs.microsoft.com/en-us/aspnet/core/tutorials/web-api-vsc?view=aspnetcore-3.0)
  * Tutorial VS - [ASP Core 3.0](https://docs.microsoft.com/en-us/aspnet/core/tutorials/first-web-api?view=aspnetcore-3.0)
* Controller action return types [ASP Core 3.0](https://docs.microsoft.com/en-us/aspnet/core/web-api/action-return-types?view=aspnetcore-3.0)

## Vortex

Write elegant and testeable solutions on C# using a Monadic Framework. ASP Core joins the functional side!

* [Vortex Repository](https://github.com/equilaterus/Vortex)
* [Sample Apps](https://github.com/equilaterus/Vortex.Samples)
* [Official website](https://equilaterus.github.io/Vortex/) 

## Performance

* A kind of - Practical intro to [Async APIs](https://www.carlrippon.com/scalable-and-performant-asp-net-core-web-apis-asynchronous-operations/)
  * Async discussions: 
    * [Sync vs Async](https://caleblloyd.com/software/net-core-mvc-thread-pool-vs-async/) 
    * [Async and IIS](https://blogs.msdn.microsoft.com/rickandy/2011/07/19/should-my-database-calls-be-asynchronous-part-ii/) 
    * [My take on Async - experiment](http://www.tugberkugurlu.com/archive/my-take-on-task-base-asynchronous-programming-in-c-sharp-5-0-and-asp-net-mvc-web-applications)

* Use DbContextPooling to improve the performance: [.Net Core 2.1](https://neelbhatt.com/2018/02/27/use-dbcontextpooling-to-improve-the-performance-net-core-2-1-feature/)

## Other guides

* Global error handling in [ASP Core](https://code-maze.com/global-error-handling-aspnetcore/)

## EF Core Hotspots

* Startup.cs -> Configure Services

  ```csharp
  services.AddDbContext<MYContext>(
      options => options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection"),
      serverOptions => serverOptions.MigrationsAssembly("ASSEMBLYNAME")));
  ```

* appsettings.json

  ```csharp
  {
    "ConnectionStrings": {
      "DefaultConnection": "Server=(localdb)\\mssqllocaldb;Database=DBNAME;Trusted_Connection=True;MultipleActiveResultSets=true"
    },
    ...
  }
  ```

* DbContext:

  ```csharp
  public class MYContext : DbContext
  {
    public MYContext() { }

    public MYContext(DbContextOptions<MYContext> options)
            : base(options) { }

    public DbSet<...> .... 
  }
  ```

* Testing InMemoryDatabase provider:

  ```csharp
  new DbContextOptionsBuilder<MYContext>()
    .UseInMemoryDatabase(databaseName: NAME)
    .Options
  ```

## AutoMapper DI

[AutoMapper Extensions for Microsoft DI](https://github.com/AutoMapper/AutoMapper.Extensions.Microsoft.DependencyInjection).

```csharp
// Add this line to your startup.cs
services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());
```

## ASP Core Web API Example

```csharp
[Route("api/[controller]")]
[ApiController]
public class UsersController : ControllerBase
{
    protected readonly IUsersRepository _repository;

    public UsersController(IUsersRepository repository)
    {
        _repository = repository;
    }

    [HttpGet]
    [ProducesResponseType(200)]
    public async Task<ActionResult<IEnumerable<User>>> GetAllAsync()
    {
        return await _repository.GetAll();
    }        

    [HttpGet("{username}")]
    [ProducesResponseType(200)]
    [ProducesResponseType(404)]
    public async Task<ActionResult<User>> GetByIdAsync(string username)
    {
        var existingUser = await _repository.GetByUsername(username);
        if (existingUser == null)
        {
            return NotFound();
        }
        return existingUser;
    }

    [HttpPost]
    [ProducesResponseType(201)]
    [ProducesResponseType(400)]
    public async Task<ActionResult<User>> CreateUserAsync(User user)
    {
        await _repository.AddUser(user);
        return CreatedAtAction(nameof(GetById), new { username = user.Username }, user);
    }

    [HttpPut("{username}")]
    [ProducesResponseType(204)]
    [ProducesResponseType(404)]
    public async Task<IActionResult> UpdateUserAsync(string username, User user)
    {
        var existingUser = await _repository.GetByUsername(username);
        if (existingUser == null)
        {
            return NotFound();
        }

        existingUser.Nickname = user.Nickname;
        existingUser.Email = user.Email;

        await _repository.Update(existingUser);
        return NoContent();
    }

    [HttpDelete("{username}")]
    [ProducesResponseType(204)]
    [ProducesResponseType(404)]
    public async Task<IActionResult> DeleteUserAsync(string username)
    {
        var existingUser = await _repository.GetByUsername(username);
        if (existingUser == null)
        {
            return NotFound();
        }

        await _repository.Delete(existingUser);
        return NoContent();
    }
}
```
