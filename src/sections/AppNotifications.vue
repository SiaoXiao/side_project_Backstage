<template>
  <notifications>
    <template #body="{ item, close }">
      <div
        class="
          notifications
          relative
          mx-4
          mb-4
          bg-white
          rounded-lg
          shadow-lg
          overflow-hidden
        "
        :class="`notifications-${item.type || 'default'}`"
      >
        <div class="notifications-inner flex p-3 border-l-4">
          <!-- icon -->
          <div>
            <heroicons-outline-check-circle v-if="item.type === 'success'" class="notifications-icon" />
            <heroicons-outline-information-circle v-else-if="item.type === 'warn'" class="notifications-icon" />
            <heroicons-outline-x-circle v-else-if="item.type === 'error'" class="notifications-icon" />
            <heroicons-outline-information-circle v-else class="notifications-icon" />
          </div>

          <div class="ml-2">
            <div class="mt-0.5 text-gray-600 font-normal tracking-wide">
              {{ item.title }}
            </div>
            <div v-if="item.text" class="mt-0.5 text-gray-400 text-sm">
              {{ item.text }}
            </div>

            <button
              type="button"
              class="
                absolute
                right-2
                top-2
                w-6
                h-6
                flex
                justify-center
                items-center
                text-gray-400
                hover:text-gray-500
                transition-colors
                duration-100
              "
              :class="item.text ? 'top-2' : 'top-4'"
              @click.prevent="close"
            >
              <heroicons-outline-x class="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </template>
  </notifications>
</template>