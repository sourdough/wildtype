/* https://unpkg.com/@supabase/storage-js@2.5.5/dist/module/StorageClient.js?module */ import StorageFileApi from "./packages/StorageFileApi.js";
import StorageBucketApi from "./packages/StorageBucketApi.js";
export class StorageClient extends StorageBucketApi {
  constructor(url, headers = {}, fetch) {
    super(url, headers, fetch);
  }
  /**
     * Perform file operation in a bucket.
     *
     * @param id The bucket id to operate on.
     */
  from(id) {
    return new StorageFileApi(this.url, this.headers, id, this.fetch);
  }}