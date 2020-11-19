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
                  buildHookId: '5fb62fa0f98460bcd27bba4e',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-bav8rt3x',
                  apiId: '33b4e646-495d-4980-a480-f110ac325d1f'
                },
                {
                  buildHookId: '5fb62fa00cbc74989ff7b4da',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-uy574xea',
                  apiId: 'ee1611f0-b4aa-47c6-ab3f-3df907519e27'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/hack89/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-uy574xea.netlify.app', category: 'apps'}
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
