import { SearchResultPage } from "./SearchResultPage";
import { withSearchResultPage } from "./withSearchResultPage";

const ConnectedSearchResultPage = withSearchResultPage(SearchResultPage);
export { ConnectedSearchResultPage as SearchResultPage };
