export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "61d50d1c59add38e3b2e4b18",
                  title: "Sanity Studio",
                  name: "stompbox-blog-studio",
                  apiId: "0e3fd47e-433b-4253-b5b2-d29d5576ed64",
                },
                {
                  buildHookId: "61d50d1c127bfa7ea6518307",
                  title: "Blog Website",
                  name: "stompbox-blog",
                  apiId: "9541eb2e-335a-4d17-aaed-945a38125bf5",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/waptechmx/stompbox-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://stompbox-blog.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
