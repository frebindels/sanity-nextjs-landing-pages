export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e30cea2dab716fb21fb3007',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-iwqv83uk',
                  apiId: 'c5eba3ce-14f7-4b5d-aad0-ac23203ed251'
                },
                {
                  buildHookId: '5e30cea264aa85aad479d85e',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-n75e1uem',
                  apiId: '8320382f-f1ac-43ea-987f-e55a49e8ffce'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/frebindels/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-n75e1uem.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
