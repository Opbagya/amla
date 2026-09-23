"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, Trash2, ArrowRight, ShieldCheck, Sparkles, CheckCircle2, Lock } from "lucide-react";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItem: {
    plan: "subscription" | "onetime";
    price: number;
    quantity: number;
  };
  onUpdateQuantity: (quantity: number) => void;
  onClearCart: () => void;
}

export function CartDrawer({
  isOpen,
  onClose,
  cartItem,
  onUpdateQuantity,
  onClearCart,
}: CartDrawerProps) {
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [checkoutComplete, setCheckoutComplete] = useState(false);

  if (!isOpen) return null;

  const subtotal = cartItem.price * cartItem.quantity;

  const handleCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      setCheckoutComplete(true);
    }, 1200);
  };

  const handleResetCheckout = () => {
    setCheckoutComplete(false);
    onClearCart();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-in fade-in duration-200">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between border-l border-[#e2e8e4] animate-in slide-in-from-right duration-300">
          {/* Header */}
          <div className="p-6 border-b border-[#e2e8e4]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-bold text-[#041f18] font-[family-name:var(--font-display)]">
                  Your Cart
                </h3>
                <span className="text-xs font-mono font-bold bg-[#f0f4f1] text-[#059669] px-2 py-0.5 rounded-full">
                  {cartItem.quantity} {cartItem.quantity === 1 ? "Item" : "Items"}
                </span>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="p-1.5 rounded-lg text-[#798b83] hover:text-[#041f18] hover:bg-[#f0f4f1] transition-colors cursor-pointer"
                aria-label="Close cart"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Free Shipping Tracker */}
            <div className="mt-4 bg-[#f8faf8] border border-[#d4e9e2] rounded-xl p-3">
              <div className="flex items-center justify-between text-xs font-semibold text-[#041f18]">
                <span className="flex items-center gap-1.5 text-[#059669]">
                  <Sparkles className="w-3.5 h-3.5" /> Free Express Shipping Unlocked!
                </span>
                <span className="font-mono text-[#059669]">₹0</span>
              </div>
              <div className="w-full bg-[#e2e8e4] h-1.5 rounded-full mt-2 overflow-hidden">
                <div className="bg-[#059669] h-full w-full rounded-full" />
              </div>
            </div>
          </div>

          {/* Cart Content Body */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {checkoutComplete ? (
              <div className="text-center py-12 px-4 space-y-4">
                <div className="w-16 h-16 bg-[#e8f5e9] text-[#059669] rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h4 className="text-xl font-bold text-[#041f18] font-[family-name:var(--font-display)]">
                  Order Confirmed!
                </h4>
                <p className="text-sm text-[#4e5e57] leading-relaxed">
                  Your batch of <strong>Amla-1™ Daily Detox (500g)</strong> is now being freshly packed. An instant invitation to the <strong>Amla-1 Companion App</strong> has been dispatched to your email.
                </p>
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={handleResetCheckout}
                    className="w-full bg-[#041f18] text-white py-3 rounded-xl font-semibold text-sm hover:bg-[#0f3e33] transition-colors cursor-pointer"
                  >
                    Continue Exploring
                  </button>
                </div>
              </div>
            ) : cartItem.quantity === 0 ? (
              <div className="text-center py-16 space-y-4">
                <p className="text-sm text-[#798b83]">Your cart is currently empty.</p>
                <button
                  type="button"
                  onClick={onClose}
                  className="bg-[#041f18] text-white text-xs font-semibold px-5 py-2.5 rounded-full cursor-pointer"
                >
                  Return to Product
                </button>
              </div>
            ) : (
              <div className="bg-[#f8faf8] border border-[#e2e8e4] rounded-2xl p-4 flex gap-4">
                {/* Product Thumbnail */}
                <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-white border border-[#e2e8e4] shrink-0">
                  <Image
                    src="/images/pouch-hero.jpg"
                    alt="Amla-1 500g Pouch"
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                </div>

                {/* Details */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between">
                      <h4 className="text-sm font-bold text-[#041f18] leading-tight">
                        Amla-1™ Daily Detox
                      </h4>
                      <button
                        type="button"
                        onClick={onClearCart}
                        className="text-[#798b83] hover:text-red-600 transition-colors p-1 cursor-pointer"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    <span className="text-[11px] font-mono text-[#059669] font-medium block mt-0.5">
                      {cartItem.plan === "subscription"
                        ? "Monthly Subscription (50-Day Cycle)"
                        : "One-Time Purchase"}
                    </span>
                    <span className="text-xs text-[#798b83] block">
                      500g Net Weight • 50 Servings
                    </span>
                  </div>

                  {/* Quantity and Price */}
                  <div className="flex items-center justify-between mt-3 pt-2 border-t border-[#e2e8e4]">
                    <div className="flex items-center border border-[#e2e8e4] rounded-lg bg-white px-2 py-0.5">
                      <button
                        type="button"
                        onClick={() => onUpdateQuantity(Math.max(1, cartItem.quantity - 1))}
                        className="px-1 text-sm font-bold text-[#4e5e57] hover:text-[#041f18] cursor-pointer"
                      >
                        -
                      </button>
                      <span className="px-2 text-xs font-mono font-bold text-[#041f18]">
                        {cartItem.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => onUpdateQuantity(cartItem.quantity + 1)}
                        className="px-1 text-sm font-bold text-[#4e5e57] hover:text-[#041f18] cursor-pointer"
                      >
                        +
                      </button>
                    </div>

                    <div className="text-right">
                      <span className="text-sm font-extrabold text-[#041f18] font-mono">
                        ₹{cartItem.price * cartItem.quantity}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Included Gifts Notification */}
            {cartItem.plan === "subscription" && cartItem.quantity > 0 && !checkoutComplete && (
              <div className="p-3 bg-[#e8f5e9] border border-[#c8e6c9] rounded-xl text-xs text-[#0f3e33] space-y-1.5">
                <span className="font-bold flex items-center gap-1 text-[#059669]">
                  <Sparkles className="w-3.5 h-3.5" /> Welcome Kit Freebies Included:
                </span>
                <div className="text-[11px] text-[#4e5e57] pl-4 space-y-0.5">
                  <div>✓ Free Frosted Shaker Tumbler (₹499 value)</div>
                  <div>✓ Free Precision Stainless Micro-Scoop (₹199 value)</div>
                  <div>✓ Lifetime Amla-1 Companion App Pro Access (₹1,200/yr value)</div>
                </div>
              </div>
            )}
          </div>

          {/* Footer Checkout Summary */}
          {cartItem.quantity > 0 && !checkoutComplete && (
            <div className="p-6 border-t border-[#e2e8e4] bg-[#f8faf8] space-y-4">
              <div className="space-y-2 text-xs text-[#4e5e57]">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-mono font-semibold text-[#041f18]">₹{subtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span>Standard Express Shipping</span>
                  <span className="font-mono text-[#059669] font-bold">FREE</span>
                </div>
                <div className="flex justify-between text-sm font-bold text-[#041f18] pt-2 border-t border-[#e2e8e4]">
                  <span>Total Amount</span>
                  <span className="font-mono text-base">₹{subtotal}</span>
                </div>
              </div>

              {/* Checkout Button */}
              <button
                type="button"
                onClick={handleCheckout}
                disabled={isCheckingOut}
                className="w-full flex items-center justify-center gap-2 bg-[#041f18] hover:bg-[#0f3e33] text-white font-bold py-4 rounded-xl shadow-md transition-all active:scale-[0.99] cursor-pointer disabled:opacity-75"
              >
                {isCheckingOut ? (
                  <span className="inline-flex items-center gap-2 text-sm">
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Securing Order...
                  </span>
                ) : (
                  <>
                    <Lock className="w-4 h-4 text-[#10b981]" />
                    <span>Proceed to Checkout</span>
                    <span className="font-mono text-[#10b981]">• ₹{subtotal}</span>
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-[#798b83]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#059669]" />
                <span>256-Bit Encrypted • UPI, Cards & COD Supported</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
