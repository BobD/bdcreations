import { PageContentFragment } from "../../../graphql-types"

export const getPageContent = <
  T extends { markdownRemark?: PageContentFragment | null }
>({
  markdownRemark,
}: T) => ({
  title: markdownRemark?.frontmatter?.title ?? "",
  content: markdownRemark?.html ?? "",
})
