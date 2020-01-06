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
                  buildHookId: '5e138b0d45f0cc0183cfc084',
                  title: 'Sanity Studio',
                  name: 'company-studio',
                  apiId: '1c333b3a-ab56-4ef0-87ed-7cefaa76c69f'
                },
                {
                  buildHookId: '5e138b0d45f0cc0183cfc085',
                  title: 'Landing pages Website',
                  name: 'company-web-j2w2wsac',
                  apiId: 'd717d406-e47a-4dfe-862c-339276f3d4fc'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/dkapper01/company',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://company-web-j2w2wsac.netlify.com', category: 'apps'}
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
