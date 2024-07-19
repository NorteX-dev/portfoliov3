import tippy from "tippy.js";
import "tippy.js/dist/tippy.css";
for (const element of document.querySelectorAll("[data-tooltip]")) {
	tippy(element as any, {
		content: element.getAttribute("data-tooltip") as string,
	});
}
