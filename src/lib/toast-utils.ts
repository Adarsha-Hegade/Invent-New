import { toast } from 'sonner';

export type EntityType = 'product' | 'booking' | 'customer' | 'manufacturer' | 'category';
export type ActionType = 'create' | 'update' | 'delete' | 'read';

const entityNames: Record<EntityType, string> = {
  product: 'Product',
  booking: 'Booking',
  customer: 'Customer',
  manufacturer: 'Manufacturer',
  category: 'Category'
};

export const showSuccessToast = (entity: EntityType, action: ActionType) => {
  const entityName = entityNames[entity];
  const actionText = action === 'create' ? 'created' : action === 'update' ? 'updated' : 'deleted';
  toast.success(`${entityName} ${actionText} successfully`);
};

export const showErrorToast = (entity: EntityType, action: ActionType, error?: any) => {
  const entityName = entityNames[entity];
  const actionText = action === 'create' ? 'create' : action === 'update' ? 'update' : action === 'delete' ? 'delete' : 'fetch';
  const errorMessage = error?.message || `Unable to ${actionText} ${entityName.toLowerCase()}`;
  toast.error(`Error: ${errorMessage}`);
};

export const showLoadingToast = (entity: EntityType, action: ActionType) => {
  const entityName = entityNames[entity];
  const actionText = action === 'create' ? 'Creating' : action === 'update' ? 'Updating' : 'Deleting';
  return toast.loading(`${actionText} ${entityName.toLowerCase()}...`);
};