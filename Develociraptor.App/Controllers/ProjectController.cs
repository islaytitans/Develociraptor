using Microsoft.AspNetCore.Mvc;

namespace Develociraptor.App.Controllers
{
    public class ProjectController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}