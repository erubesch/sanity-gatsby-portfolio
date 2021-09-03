export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '61317252f3740762d8fd295d',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-ejkwimsn',
                  apiId: '66897bec-0ef4-4d21-8126-e9829d847532'
                },
                {
                  buildHookId: '6131725241a385603cfc2c89',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-rupyw2ze',
                  apiId: 'b937d203-04fa-4794-8b65-cbbbcf3e6791'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/erubesch/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-rupyw2ze.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
