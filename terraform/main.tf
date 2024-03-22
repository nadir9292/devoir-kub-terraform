provider "azurerm" {
  features {}
}

# Définition du cluster AKS
resource "azurerm_kubernetes_cluster" "aks-nadir" {
  name                = "cluster-nadir"
  location            = "Sweden Central"
  resource_group_name = "hitema_kube"  # Le groupe de ressources existant
  dns_prefix          = "hitema"

  default_node_pool {
    name       = "default"
    node_count = 1
    vm_size    = "Standard_DS2_v2"
  }

  tags = {
    environment = "Dev"
  }
}