import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'

@Module({
  name: 'contentModule'
})
export default class ContentModule extends VuexModule {
  articles: Array<any> = []

  @Mutation
  setArticles (newArticles: Array<any>, append = false) {
    if (append) {
      this.articles = this.articles.concat(newArticles)
    }
    this.articles = newArticles
  }

  @Mutation
  filterByPublishDate () {
    this.articles.filter((article: any) =>
      article &&
      article.published &&
      new Date(article.published).getTime() < new Date().getTime())
  }

  @Action
  async fetchArticles (context: any) {
    const articles = await context.$content('articles')
      .sortBy('published', 'desc')
      .fetch()

    this.setArticles(articles)
    this.filterByPublishDate()
  }
}
